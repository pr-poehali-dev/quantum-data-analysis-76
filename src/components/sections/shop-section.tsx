import { useState } from "react"
import { useReveal } from "@/hooks/use-reveal"

const categories = [
  { id: "all", label: "Все" },
  { id: "coffins", label: "Гробы" },
  { id: "crosses", label: "Кресты" },
  { id: "wreaths", label: "Венки" },
  { id: "wreaths-vip", label: "Венки VIP" },
  { id: "baskets", label: "Корзины" },
  { id: "clothing", label: "Одежда и бельё" },
]

const products = [
  { id: 1, category: "coffins", name: "Гроб полированный «Классик»", price: "от 8 500 ₽", image: null },
  { id: 2, category: "coffins", name: "Гроб полированный «Премиум»", price: "от 15 000 ₽", image: null },
  { id: 3, category: "coffins", name: "Гроб полированный «Люкс»", price: "от 25 000 ₽", image: null },
  { id: 4, category: "crosses", name: "Крест деревянный резной", price: "от 2 000 ₽", image: null },
  { id: 5, category: "crosses", name: "Крест металлический", price: "от 3 500 ₽", image: null },
  { id: 6, category: "wreaths", name: "Венок «Траурный»", price: "от 1 500 ₽", image: null },
  { id: 7, category: "wreaths", name: "Венок «Память»", price: "от 2 500 ₽", image: null },
  { id: 8, category: "wreaths-vip", name: "Венок VIP «Элегия»", price: "от 5 000 ₽", image: null },
  { id: 9, category: "wreaths-vip", name: "Венок VIP «Скорбь»", price: "от 7 500 ₽", image: null },
  { id: 10, category: "baskets", name: "Корзина «Белая лилия»", price: "от 3 000 ₽", image: null },
  { id: 11, category: "baskets", name: "Корзина «Роза»", price: "от 4 500 ₽", image: null },
  { id: 12, category: "clothing", name: "Платье погребальное", price: "от 1 200 ₽", image: null },
  { id: 13, category: "clothing", name: "Костюм погребальный мужской", price: "от 1 800 ₽", image: null },
  { id: 14, category: "clothing", name: "Бельё погребальное (комплект)", price: "от 800 ₽", image: null },
]

export function ShopSection({ scrollToContact }: { scrollToContact?: () => void }) {
  const { ref, isVisible } = useReveal(0.2)
  const [activeCategory, setActiveCategory] = useState("all")

  const filtered = activeCategory === "all" ? products : products.filter(p => p.category === activeCategory)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start flex-col px-6 pt-20 pb-8 md:px-12 md:pt-24 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl flex flex-col h-full">
        <div
          className={`mb-6 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-1 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Каталог
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Ритуальные товары</p>
        </div>

        <div
          className={`mb-6 flex flex-wrap gap-2 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full border px-4 py-1.5 font-mono text-xs transition-all duration-300 ${
                activeCategory === cat.id
                  ? "border-foreground/60 bg-foreground/15 text-foreground"
                  : "border-foreground/15 text-foreground/50 hover:border-foreground/30 hover:text-foreground/80"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div
          className={`flex-1 overflow-y-auto transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "300ms", scrollbarWidth: "none" }}
        >
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 md:gap-4 pb-4">
            {filtered.map((product, i) => (
              <div
                key={product.id}
                className="group flex flex-col border border-foreground/10 bg-foreground/5 backdrop-blur-sm transition-all duration-300 hover:border-foreground/25 hover:bg-foreground/10"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div className="aspect-square w-full bg-foreground/8 flex items-center justify-center border-b border-foreground/10">
                  <div className="flex flex-col items-center gap-2 text-foreground/20">
                    <div className="h-12 w-12 rounded-full border border-foreground/15 flex items-center justify-center">
                      <span className="text-xl">📦</span>
                    </div>
                    <span className="font-mono text-xs">фото скоро</span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-3 md:p-4">
                  <h3 className="mb-1 font-sans text-sm font-light leading-snug text-foreground md:text-base">
                    {product.name}
                  </h3>
                  <p className="mb-3 font-mono text-xs text-foreground/60">{product.price}</p>
                  <button
                    onClick={() => scrollToContact?.()}
                    className="mt-auto w-full border border-foreground/25 py-2 font-mono text-xs text-foreground/80 transition-all duration-300 hover:border-foreground/50 hover:bg-foreground/10 hover:text-foreground"
                  >
                    Заказать
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
