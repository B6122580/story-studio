// Optional Firebase bridge. No credentials are embedded in the distributed template.
window.StoryCloud = (async () => {
  const config = window.STORY_FIREBASE_CONFIG;
  if (!config?.apiKey || !config?.projectId) return null;
  const base = 'https://www.gstatic.com/firebasejs/10.14.1/';
  const [{initializeApp},{getAuth,signInWithEmailAndPassword,signOut,onAuthStateChanged},{getFirestore,doc,setDoc,getDoc,collection,getDocs,deleteDoc}] = await Promise.all([
    import(base+'firebase-app.js'),import(base+'firebase-auth.js'),import(base+'firebase-firestore.js')
  ]);
  const app=initializeApp(config),auth=getAuth(app),db=getFirestore(app);
  return {auth,db,signInWithEmailAndPassword,signOut,onAuthStateChanged,doc,setDoc,getDoc,collection,getDocs,deleteDoc};
})();
