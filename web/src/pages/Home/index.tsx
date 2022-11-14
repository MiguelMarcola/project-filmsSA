import { Sidebar } from "../../components/Sidebar";

export function Home() {
    return (
        <div className='flex items-center justify-between h-screen'>
            <Sidebar />
            <h1 className="text-7xl font-normal text-white">
                Hello World!
            </h1>
            <div></div>
        </div>
    )
}