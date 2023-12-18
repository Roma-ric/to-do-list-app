
function Operation({lien, operation, description, target_}) {
    return (
        <div class="card p-1 mb-3" style={{ width: "12rem" }}>
            <img src={lien} className="m-auto" alt="" width={30} height={30} />
            <div class="card-body">
                <p class="card-text"> {description} </p>
                <div className='d-flex justify-content-around'>
                    <a href="#" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target={"#" + target_}> {operation} </a>
                </div>
            </div>
        </div>
    );
}

export default Operation;