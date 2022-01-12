import React, { Fragment } from 'react';

const ViewUser = ({ myUser, editProfile }) => {
	return (
		<div>
			<div className="card" style={{ width: "70%" }}>
				<h1 className="text-center">Mi perfil</h1>
				<div className="card-body d-flex flex-column justify-content-center align-items-center">
					<img src={myUser.path} height="100" width="100" alt="foto" className="img-fluid" />
					<div>
						<h4><strong>Nombre:</strong> {myUser.nombre}</h4>
						<h4><strong>Apellido:</strong> {myUser.apellido}</h4>
					</div>
					<div className=" d-flex mt-2">
						<button onClick={() => editProfile(true)} className="btn btn-dark">Editar Perfil</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ViewUser