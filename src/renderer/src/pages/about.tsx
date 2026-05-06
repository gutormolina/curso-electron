import { useQuery, useQueryClient } from "@tanstack/react-query";

export function About() {

    const queryClient = useQueryClient();

    const { data, isFetching } = useQuery({ queryKey: ["version-app"], queryFn: async () => {
        const response = await window.api.getVersionApp();
        return response;
    } })

    return (
        <div className='flex-1 flex flex-col py-12 px-10 text-white'>
            <h1 className='text-white text-xl lg:text-2xl font-semibold mb-4'>
                Sobre
            </h1>

            <p>Projeto criado no curso <b>@sujeitoprogramador</b></p>
            <p>Versão atual do projeto: {!isFetching && data && data}</p>
        </div>
    )
}