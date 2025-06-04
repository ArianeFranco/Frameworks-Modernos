import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth' // ✅ importação correta

const firebaseConfig = {
  apiKey: "AIzaSyDY-Pe4lAp0tyG7Cqu-EIXEJ_AhljEiYl0",
  authDomain: "atividade01-78b30.firebaseapp.com",
  projectId: "atividade01-78b30",
  storageBucket: "atividade01-78b30.firebasestorage.app",
  messagingSenderId: "147992692805",
  appId: "1:147992692805:web:e3d07a058dd6bafefafb2c"
}

// 🔧 Inicializa o app Firebase
const app = initializeApp(firebaseConfig)

// ✅ Instâncias de autenticação
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

// ✅ Exportação nomeada correta
export { auth, provider }
