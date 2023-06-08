import React from 'react'

export default function SerciseItemTemplate({itemNum, itemTitle, itemText}) {
  return (
    <div className="myItemTemplate my-10 font-medium md:flex">
        <p className="uppercase xs:text-sm sm:text-base md:text-sm lg:text-base font-medium mb-[14px] md:w-1/2">
        <span className="text-main_color mr-2 xl:mr-12">{itemNum}</span>
            {itemTitle}
        {/* {langData.service_item3_title} */}
        </p>
        <p className="leading-[18px] xs:text-sm sm:text-base sm:w-5/6 sm:ml-auto md:w-1/2">
            {itemText}
        {/* {langData.service_item3_text} */}
        </p>
    </div>
  )
}
