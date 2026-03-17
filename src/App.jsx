import React, { useState } from 'react'

const App = () => {

  const [Heading, setHeading] = useState("")
  const [Note, setNote] = useState("")
  const [Tasks, setTasks] = useState([])

  function SubmitForm() {
    console.log("Task Added", { "Heading": Heading, "Note": Note })

    let newTasks = [...Tasks]
    newTasks.push({ "Heading": Heading, "Note": Note })
    setTasks(newTasks);
    console.log(newTasks);
    setHeading("")
    setNote("")
  }

  return (
    <>
      <section className='lg:flex lg:items-center lg:justify-center'>
        {/* form for add new task */}
        <div className='lg:w-1/3 w-full h-fit p-7 flex justify-center items-center'>
          <div className='max-w-lg w-full p-2 bg-[#333]/70 rounded-2xl shadow-2xl shadow-black'>
            <form action="" className='w-full h-full p-10 bg-[#111]/95 text-white rounded-2xl' onSubmit={(e) => { e.preventDefault(); SubmitForm(); }} >
              <h1 className='text-center text-2xl font-bold pb-5'>Add Your Task</h1>
              <div className='text-center flex flex-col py-4 gap-5'>
                <input type="text" name="" id="" className='py-2 px-4 rounded-md outline-none bg-[#333] border-1 border-[#666]' placeholder='Heading...' value={Heading} onChange={(e) => setHeading(e.target.value)} />
                <textarea name="" id="" className='py-2 px-4 rounded-md outline-none bg-[#333] border-1 border-[#666] resize-nonez' placeholder='Notes...' rows={8} value={Note} onChange={(e) => setNote(e.target.value)}></textarea>
                <input type="submit" value="Add Note" className='duration-[0.3s] border-1 py-2 px-4 rounded-md outline-none bg-white text-[#111]/95 border-white font-semibold hover:bg-[#111]/95 hover:text-white hover:border-white cursor-pointer hover:shadow-md hover:shadow-white/10 active:scale-90' />
              </div>
            </form>
          </div>
        </div>

        {/* div for show all tasks */}
        <div className='lg:w-2/3 w-full h-screen lg:border-l-2 max-lg:border-t-2 border-dashed bg-gray-300 flex flex-wrap items-center justify-center p-8 gap-6 overflow-auto'>

          {
            Tasks.map((task, id) => {
              return (
                <div className='bg-white w-full max-w-78 h-78 rounded-4xl shadow-2xl flex items-end justify-center p-3 relative' key={id}>
                  <img src="./pin.png" alt="" className='size-10 absolute z-10 top-4' />
                  <div className='w-full h-60 bg-orange-200 rounded-3xl font-bold p-4'>
                    <div className='bg-orange-400 w-6 h-6 flex items-center justify-center rounded-full p-3'><h1 className='text-lg'>{id+1}</h1></div>
                      <h1 className='text-2xl font-semibold text-center py-1'>{task.Heading}</h1>
                      <p className='text-gray-400 text-lg font-medium py-1'>{task.Note}</p>
                  </div>
                </div>
              )
            })
          }

        </div>
      </section>
    </>
  )
}

export default App