import React from 'react'

const CheckGender = () => {
  return (
    <div className='flex mt-2 gap-3'>
        {/* <div className='form-control'>
            <label className={`label gap-2 cursor-pointer`}>
                <span className='label-text'>Male</span>
                <input type="checkbox" className='checkbox border-slate-900' />
            </label>
        </div>

        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer`}>
                <span className='label-text'>Female</span>
                <input type="checkbox" className='checkbox border-slate-900' />
            </label>
        </div> */}
        {/* <input type="radio" name="radio-1" className="radio" defaultChecked />
        <input type="radio" name="radio-1" className="radio" /> */}

        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text">Female</span>
                <input type="radio" name="radio-10" className="radio checked:bg-red-500" defaultChecked />
            </label>
        </div>
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="label-text">Male</span>
                <input type="radio" name="radio-10" className="radio checked:bg-blue-500" defaultChecked />
            </label>
        </div>
    </div>
  )
}

export default CheckGender