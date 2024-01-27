import { useEffect, useState } from "react";
import { query, collection, orderBy } from "firebase/firestore";
import { db } from "../firebase/config";
import { onSnapshot } from "firebase/firestore";

type Image = {
    createdAt :  Date,
    userEmail :string,
    imageUrl : string
}
const useFirestore = (collectionName : string) => {
    const [docs, setDocs] = useState<Image[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {

        let unsubscribe: () => void
        const getData = async() => {
            try{
                const q = query(collection(db, collectionName), orderBy("createdAt", "desc"));
                unsubscribe = onSnapshot(q, (querySnapshot) => {
                    const images: Image[] = [];
                    querySnapshot.forEach((doc) => {
                        const imageUrl = doc.data().imageUrl
                        const userEmail = doc.data().userEmail
                        const createdAt = doc.data().createdAt.toDate();
                        images.push({imageUrl, createdAt, userEmail})
                    });
                    setDocs(images);
                    setIsLoading(false);
                });
            }
            catch(error){
              console.log(error);  
              setIsLoading(false);
            }
        }
        getData();

        return () => unsubscribe && unsubscribe();
    }, [collectionName])

    return {
        docs, isLoading
    };
};

export default useFirestore;