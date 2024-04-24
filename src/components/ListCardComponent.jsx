import React from 'react'

const ListCardComponent = () => {
    return (
        <main className="w-full m-5">
            <div className="w-[70%] bg-red-500 rounded-xl p-5 flex gap-10">
            <div className="bg-slate-300 w-32 p-5 rounded-xl ">
                <div className="flex flex-col items-center">
                    <span className="items-center text-center text-red-600">Mon</span>
                    <h1 className="text-4xl">
                        20
                    </h1>
                </div>
            </div>
            <div className="flex w-full justify-between">
                <div>
                    <h1 className="text-xl">
                        slack Intergration
                    </h1>
                    <p>
                        add a field in the portal to lelt the user <br />
                        connect their Stack account.
                    </p>
                </div>
                <div className="flex flex-col ">
                    <button className="bg-amber-200 h-10 w-32 rounded-lg mt-16 right-0 ">add todo</button>
                </div>
            </div>

        </div>
        </main>
    )
}

export default ListCardComponent
