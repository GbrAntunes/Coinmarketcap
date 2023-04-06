type PageHeaderProps = {
  isHighlightsShown: boolean
  toggleHighlights: (value: boolean) => void
}

export function PageHeader({ isHighlightsShown, toggleHighlights }: PageHeaderProps) {
  return (
    <div className="flex justify-between py-14 px-28">
      <h1 className="text-2xl font-bold">
        Preço das criptomoedas por valor de mercado
      </h1>

      <div
        className="flex items-center"
        onClick={() => toggleHighlights(!isHighlightsShown)}
      >
        <label className="text-[#A7B1C2] select-none mr-2 cursor-pointer">
          Highlights
          <input type="checkbox" className="hidden" id="highlights" />
        </label>

        <div className={`
          w-14 h-7 rounded-2xl flex items-center px-1 cursor-pointer transition duration-200
          ${isHighlightsShown ? 'bg-[#3861FB]' : 'bg-slate-400'}
          ${isHighlightsShown ? 'justify-end' : 'justify-start'}
        `}>
          <div className="h-5 w-5 rounded-xl bg-slate-200"></div>
        </div>
      </div>
    </div>
  )
}
