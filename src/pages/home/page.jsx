

import Search from '@/components/Search';
import Carousel from './carousel';
import Bar from '@/components/categorybar';
import Categorybar from './categorybar';
import ProductListing from '@/components/ProductListing';
import CustomCountdown from '@/components/countdown';
const Home = () => {
    // const [isloading, setisloading] = useState(true)

    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         setisloading(false)
    //     }, 1000)
    //     return () => clearTimeout(timeout)
    // }, [])

    return (
        <div>
            <Carousel />
            <Categorybar />






            <div className='container mx-auto'>

                <CustomCountdown targetDate={"2025-12-10T00:00:00"} />
                <Search />
                <Bar category={'Hungry Hustle Deal'} id={'hungry-hustle'} />
                <ProductListing category={'Hungry Hustle Deal'} />



                <Bar category={'Deals'} id={'deals'} />
                <ProductListing category={'Deals'} />
            </div>


            <Bar category={'BBQ Platter'} id={'bbq-platter'} />
            <ProductListing category={'BBQ Platter'} />




            <Bar category={'Pizza Regulars'} id={'pizza-regular'} />

            <ProductListing category={'Pizza Regulars'} />





            <Bar category={'Pizza Specials'} id={'pizza-special'} />
            <ProductListing category={'Pizza Specials'} />

        </div>




    )
}

export default Home