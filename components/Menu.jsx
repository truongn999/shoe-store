import Link from 'next/link'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

const data = [
  { id: 1, name: 'Home', url: '/' },
  { id: 2, name: 'About', url: '/about' },
  { id: 3, name: 'Categories', subMenu: true },
  { id: 4, name: 'Contact', url: '/contact' },
]

const subMenuData = [
  { id: 1, name: 'Jordan', doc_count: 107 },
  { id: 2, name: 'Sneaker', doc_count: 107 },
  { id: 3, name: 'running shoes', doc_count: 107 },
  { id: 4, name: 'Football shoes', doc_count: 107 },
]

const Menu = ({showCatMenu, setShowCatMenu}) => {
  return (
    <ul className='hidden md:flex items-center gap-8 font-medium text-black'>
      {data.map(item => {
        return (
          <React.Fragment key={item.id}>
            {item?.subMenu ? (
              <li className='cursor-pointer flex items-center gap-2 relative'
                onMouseEnter={() => setShowCatMenu(true)}
                onMouseLeave={() => setShowCatMenu(false)}
              >
                {item.name}
                <BsChevronDown size={14} />

                {showCatMenu && (
                  <ul className='bg-white absolute top-6 left-0 min-w-[250px] p-1 text-black shadow-lg'>
                    {subMenuData.map((item)=> {
                      return (
                        <Link key={item.id} href='/' onClick={() => setShowCatMenu(false)}>
                          <li className='h-12 flex justify-between items-center px-3 hover:bg-black/[.03] rounded-md'>{item.name}
                            <span className='opacity-50 text-sm'>87</span>
                          </li>
                        </Link>
                      )
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className='cursor-pointer'>
                <Link href={item?.url}>
                  {item.name}
                </Link>
              </li>
            )}
          </React.Fragment>
        )
      })}
    </ul>
  )
}

export default Menu