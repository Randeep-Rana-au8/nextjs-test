'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react'

const Todos = () => {
    const [list, setList] = useState<string[]>([])
    const [input, setInput] = useState("")

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log(e.target)
        setList([...list, input])
        setInput("")
    }

    return (
        <div className='my-12'>
            <form className='m-w-1/2 bg-white flex justify-between max-w-md'>
                <input className='text-black h-12 bg-white p-4' placeholder='Enter some text' type="text" name="tInput" id="" value={input} onChange={e => setInput(e.target.value)} />
                <button type='submit' onClick={handleSubmit} className='text-black bg-white h-12 p-2 hover:bg-zinc-200 hover:text-slate-800'>Submit</button>
            </form>
            <div className="list mt-6">
                {
                    list.map(item => <h1 key={item} className='mt-2'>{item}</h1>)
                }
            </div>
        </div>
    )
}

export default Todos