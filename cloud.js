
window.StoryCloud = (async () => {
  const config = window.STORY_FIREBASE_CONFIG;
  if (!config?.apiKey || !config?.projectId) return null;

  const base = 'https://www.gstatic.com/firebasejs/10.14.1/';

  const [
    { initializeApp },
    {
      getAuth,
      signInWithEmailAndPassword,
      signOut,
      onAuthStateChanged,
      EmailAuthProvider,
      reauthenticateWithCredential,
      verifyBeforeUpdateEmail
    },
    {
      getFirestore,
      doc,
      setDoc,
      getDoc,
      collection,
      getDocs,
      deleteDoc
    }
  ] = await Promise.all([
    import(base + 'firebase-app.js'),
    import(base + 'firebase-auth.js'),
    import(base + 'firebase-firestore.js')
  ]);

  const app = initializeApp(config);
  const auth = getAuth(app);
  const db = getFirestore(app);

  return {
    auth,
    db,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    EmailAuthProvider,
    reauthenticateWithCredential,
    verifyBeforeUpdateEmail,
    doc,
    setDoc,
    getDoc,
    collection,
    getDocs,
    deleteDoc
  };
})();
