import HeroBanner from "@/components/HeroBanner"
import ProductCard from "@/components/ProductCard"
import Wrapper from "@/components/Wrapper"
import { fetchDataFromApi } from "@/utils/api"

export default function Home({ products }) {
  // const [data, setData] = useState(null)
  // useEffect(() => {
  //   fetchProducts()
  // }, [])

  // const fetchProducts = async () => {
  //   const {data} = await fetchDataFromApi('/api/products')
  //   setData(data)
  // }

  return (
    <>
      <main>
        <HeroBanner />
        <Wrapper>
          {/* Text heading and paraphra start */}
          <div className='text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]'>
            <div className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight'>Cushioning for Your Miles</div>
            <div className="text-md md:text-lg">A lightweight Nike ZooX midsole  is combined with increased stack heights to help provide Cushioning during extended stretches of running.</div>
          </div>
          {/* Text heading and paraphra end */}

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0'>
            {
              products?.data?.map((product) => (
                <ProductCard key={product?.id} data={product} />
              ))
            }
          </div>
        </Wrapper>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const products = await fetchDataFromApi("/api/products?populate=*");

  return {
      props: { products },
  };
}
