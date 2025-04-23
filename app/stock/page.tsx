import { getFishStock } from '@/app/stock/stockActions'
import { StockList } from '@/app/stock/stock-list'

export default async function StockPage() {
  try {
    const fishStock = await getFishStock()
    const response = await fetch(
      `${process.env.CMS_API}/api/species?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${process.env.CMS_API_TOKEN}`,
        },
      }
    )
    return <StockList fishStock={fishStock} />
  } catch (error) {
    console.error('Error in StockPage:', error)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error Loading Stock</h1>
          <p className="text-gray-600">We're having trouble loading our stock. Please try again later.</p>
        </div>
      </div>
    )
  }
} 