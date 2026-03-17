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
      <section className='min-h-screen bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#020617] flex'>
        <div className='lg:w-[30%] w-full p-10 flex flex-col justify-center bg-white/5 backdrop-blur-2xl border-r border-white/10'>
          <div className='max-w-md w-full mx-auto'>
            <div className='mb-10'>
              <h1 className='text-4xl font-black text-white tracking-tight'>
                Task<span className='text-blue-500'>Flow</span>
              </h1>
              <p className='text-slate-400 mt-2 text-sm'>
                Manage your daily productivity like a pro 🚀
              </p>
            </div>
            <form
              className='space-y-6'
              onSubmit={(e) => { e.preventDefault(); SubmitForm(); }}
            >
              <div>
                <label className='text-xs text-slate-400 ml-1'>Task Title</label>
                <input
                  type="text"
                  placeholder='Enter task title...'
                  value={Heading}
                  onChange={(e) => setHeading(e.target.value)}
                  className='w-full mt-1 px-4 py-3 rounded-xl bg-[#020617] border border-white/10 text-white focus:ring-2 focus:ring-blue-500 outline-none transition'
                />
              </div>
              <div>
                <label className='text-xs text-slate-400 ml-1'>Description</label>
                <textarea
                  rows={4}
                  placeholder='Write task details...'
                  value={Note}
                  onChange={(e) => setNote(e.target.value)}
                  className='w-full mt-1 px-4 py-3 rounded-xl bg-[#020617] border border-white/10 text-white focus:ring-2 focus:ring-blue-500 outline-none transition resize-none'
                ></textarea>
              </div>
              <button
                type='submit'
                className='w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white font-semibold tracking-wide shadow-lg shadow-blue-600/20 active:scale-95 transition'
              >
                + Add Task
              </button>
            </form>
          </div>
        </div>

        <div className='lg:w-[70%] w-full p-10 overflow-y-auto'>
          <div className='flex justify-between items-center mb-10'>
            <h2 className='text-2xl font-bold text-white'>Your Tasks</h2>
            <span className='text-sm text-slate-400'>
              {Tasks.length} Tasks
            </span>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
            {Tasks.map((task, id) => (
              <div
                key={id}
                className='relative group p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10'
              >
                <div className='absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-blue-500/10 to-indigo-500/10 blur-xl'></div>
                <div className='relative z-10'>
                  <div className='flex items-start justify-between mb-4'>
                    <span className='text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400'>
                      Task #{id + 1}
                    </span>
                  </div>
                  <h3 className='text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition'>
                    {task.Heading}
                  </h3>
                  <p className='text-slate-400 text-sm leading-relaxed line-clamp-4'>
                    {task.Note}
                  </p>
                  <div className='flex justify-end items-center mt-6 pt-4 border-t border-white/10'>
                    <span className='text-xs text-slate-500'>
                      Created just now
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default App