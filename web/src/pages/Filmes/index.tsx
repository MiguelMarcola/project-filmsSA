import { Sidebar } from "../../components/Sidebar";

export function Filmes() {
    return (
        <div className='flex items-center justify-between h-screen'>
            <Sidebar />
            <h1 className="text-7xl font-normal text-white">
                Hello Filmes!
            </h1>
            <div></div>
        </div>
    )
}