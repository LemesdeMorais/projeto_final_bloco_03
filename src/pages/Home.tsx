import { Pill, Truck, Heartbeat } from "phosphor-react";

export default function Home() {
    return (
        <div className="bg-slate-50 min-h-[70vh]">
            <section className="max-w-6xl mx-auto px-4 py-10 md:py-16 grid md:grid-cols-2 gap-10 items-center">

                <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                        <span className="block text-slate-900">Sua farmácia</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-main">
                            rápida, confiável e online.
                        </span>
                    </h2>

                    <p className="text-slate-600 text-base md:text-lg">
                        Encontre medicamentos, cosméticos, vitaminas e tudo o que você precisa
                        para cuidar da saúde sem sair de casa. Entrega ágil, preços especiais
                        e segurança em cada pedido.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        <button className="px-5 py-2.5 rounded-full bg-gradient-main text-white font-semibold text-sm md:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition">
                            Ver produtos em destaque
                        </button>
                        <button className="px-5 py-2.5 rounded-full border border-primary-dark text-primary-dark font-semibold text-sm md:text-base bg-white hover:bg-primary-light/10 transition">
                            Conhecer categorias
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-4 text-xs md:text-sm text-slate-600 pt-2">
                        <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-primary-light"></span>
                            Entrega rápida em todo o Brasil
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-secondary"></span>
                            Pagamento seguro
                        </div>
                    </div>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="col-span-1 sm:col-span-2 bg-white rounded-2xl p-5 shadow-md border border-primary-light/20 animate-float">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-xl bg-primary-light flex items-center justify-center text-white">
                                <Pill size={26} weight="fill" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900">Medicamentos com desconto</h3>
                                <p className="text-sm text-slate-600">
                                    Genéricos e de referência com ofertas exclusivas para compras online.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-5 shadow-md border border-secondary/20">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center text-white">
                                <Truck size={24} weight="fill" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900">Entrega expressa</h3>
                                <p className="text-xs text-slate-600">
                                    Receba em poucas horas em regiões selecionadas.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-5 shadow-md border border-accent/20">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-xl bg-accent flex items-center justify-center text-white">
                                <Heartbeat size={24} weight="fill" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900">Cuidado completo</h3>
                                <p className="text-xs text-slate-600">
                                    Produtos de bem-estar, beleza e saúde em um só lugar.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
