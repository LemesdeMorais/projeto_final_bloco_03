import { toast } from "react-toastify";

type TipoToast = "sucesso" | "erro" | "info" | "aviso";

export function toastAlert(mensagem: string, tipo: TipoToast = "info") {
    const options = {
        position: "top-right" as const,
        autoClose: 3000,
    };

    switch (tipo) {
        case "sucesso":
            toast.success(mensagem, options);
            break;
        case "erro":
            toast.error(mensagem, options);
            break;
        case "aviso":
            toast.warning(mensagem, options);
            break;
        default:
            toast.info(mensagem, options);
    }
}
