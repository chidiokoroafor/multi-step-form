import { Toaster } from "sonner"
import SubscriptionForm from "./components/SubscriptionForm"

function App() {
 
  return (
    <main className="w-full min-h-screen flex justify-center items-center bg-Magnolia">
      <Toaster richColors position="top-center" />
               <SubscriptionForm  />
         
    </main>
  )
}

export default App
