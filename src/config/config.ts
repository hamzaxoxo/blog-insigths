const conf = {
    appwriteUrl: String(process.env.NEXT_PUBLIC_APPWRITE_BASE_URL),
    appwriteProjectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(process.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(process.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(process.env.VITE_APPWRITE_BUCKET_ID),
}

export default conf;
