import { useState } from "react"
import JobList from "./components/JobList"
import PostJobForm from "./components/PostJobForm"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Hero from "./components/Hero"

function App() {

  const [showForm,setShowForm] = useState(false)
  const [refresh,setRefresh] = useState(false)
  const [searchTerm,setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All");

  
  const refreshJobs = ()=>{
    setRefresh(!refresh)
  }
  
  return (
    
      <div>

       <Header onPostJobClick={()=>setShowForm(true)}/>

        <section id="home">
          <Hero onSearch={(text)=>setSearchTerm(text)} onCategorySelect = {setSelectedCategory}/>
        </section>

        <section id="jobs">
         {showForm && (
          <PostJobForm onJobPosted={refreshJobs}
          onClose={()=>setShowForm(false)}/>
        )}
        <JobList refresh={refresh} search={searchTerm} category={selectedCategory}/>

        </section>

        <section id="contact">
        <Footer/>
        </section>
        
        
    </div>
  )
}

export default App
