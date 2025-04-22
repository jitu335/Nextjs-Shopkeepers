import Image from "next/image";

import React from 'react'


function CodeEditor() {

  return (
    <section className="py-20 bg-blue-100">
      <h2 className="text-center text-3xl font-bold mb-10">Embedded Code Editor!</h2>
      <div className="flex justify-center">
        <img src="/path/to/code-editor.png" alt="Code Editor" className="w-3/4" />
      </div>
    </section>
  )
}

export default CodeEditor