import React from 'react'
import style from "./Page8Style.module.css"

const Page8 = () => {
    return (
        <div className={`${style.pg8Div}`}>
            <div className={`${style.pg8HDiv}`}><h1>Sponsors & Community Partners</h1></div>
            <div className={`${style.pg8BottomSpons}`}>
                <div role="tablist" className="tabs tabs-bordered">
                    <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Tab 1" />
                    <div role="tabpanel" className="tab-content p-10">Tab content 1</div>

                    <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Tab 2" checked />
                    <div role="tabpanel" className="tab-content p-10">Tab content 2</div>

                    <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Tab 3" />
                    <div role="tabpanel" className="tab-content p-10">Tab content 3</div>
                </div>
            </div>
        </div>
    )
}

export default Page8