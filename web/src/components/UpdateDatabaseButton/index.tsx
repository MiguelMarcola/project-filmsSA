import { useState } from "react"
import toast, { Toaster } from "react-hot-toast";
import { Loading } from "../Loading";

export function UpdateDatabaseButton() {
    const [isLoading, setIsLoading] = useState(false)

    const mockLoadign = async () => {
        setIsLoading(true);
        await setInterval(() => {
            setIsLoading(false);
        }, 2000)
        toast.success('Filmes Atualizados com sucesso!')
        toast.error("Ocorreu um problema ao atualizar!")
    }

    return (
        <button
            className="flex items-center justify-center w-20 h-14 bg-green-700 p-2 text-sm text-white rounded-md hover:bg-green-600 transition-all disabled:bg-green-600"
            disabled={isLoading}
            onClick={mockLoadign}
        >
            {isLoading
                ? <Loading />
                : "Atualizar Filmes"
            }
            <Toaster />

        </button>
    )
}