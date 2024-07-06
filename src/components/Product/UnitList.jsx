import PropTypes from 'prop-types';
const UnitList = ({ units, sortUnit, handleUnitChange }) => {
    return (
        <>
            <div className="py-5">
                <h3 className="text-xl font-medium py-3">Filter By Units</h3>
                <div className="space-y-2">
                    {units.map((unit) => (
                        <div
                            key={unit.value}
                            onClick={() => handleUnitChange(unit.value)}
                            className={`flex items-center justify-center text-center p-2 cursor-pointer rounded-lg transition duration-300 ease-in-out w-1/2 lg:w-[90%]
              ${sortUnit === unit.value ? 'bg-green-200 text-green-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                            <span>{unit.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
UnitList.propTypes = {
    units: PropTypes.array,
    sortUnit: PropTypes.string,
    handleUnitChange: PropTypes.func
}
export default UnitList