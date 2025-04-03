

export default function PageHeader({pageTitle}) {
    return (
        <div id="PageHeader" className="d-flex justify-content-center align-items-center bg-pgreen text-white w-100 p-0" style={{
            height:"110px"
        }}>
            <h2 className="">{pageTitle}</h2>
        </div>
    )
}