import '../../css/router/profile/ProfileEdit.css';
import ProfileImage from '../../module/ProfileImage';

const onImageChange = (event) => {
	const input = event.target;
	const reader = new FileReader();

	reader.onload = (readerEvent) => {
		console.dir(input.parentElement.firstElementChild);
		input.parentElement.firstElementChild.src = readerEvent.target.result;
	};

	const imageFile = input.files[0];
	reader.readAsDataURL(imageFile);
};

function ProfileEdit({ user }) {
	const { username, email, desc, category, profile_img, phone, instagram } = user;

	const basicInformation = [
		{ name: 'E-mail', value: 'e-mail', default: 'nagi@nagi.com' },
		{ name: 'Phone', value: 'phone', default: '010-1234-5678' },
		{ name: 'Instagram', value: 'instagram', default: 'nagigigi' },
	];

	return (
		<div className="ProfileEdit" method="post">
			<div className="background">
				<form>
					<div className="img_name_category">
						<div className="img_container">
							<label htmlFor="profile_img">
								<ProfileImage src={profile_img} radius={150} />
								<span>프로필 사진 수정</span>
							</label>
							<input
								name="profile_img"
								id="profile_img"
								type="file"
								accept="image/png, image/jpeg"
								onChange={onImageChange}
							/>
						</div>

						<div className="name_category_container">
							<div>
								<label htmlFor="username">사용자 이름</label>
								<input name="username" id="username" type="text" defaultValue={username} />
							</div>
							<div>
								<label htmlFor="category">카테고리</label>
								<select name="" id="" className="">
									<option value="photographer" defaultValue>
										Photographer
									</option>
									<option value="model">Model</option>
									<option value="hair_makeup">Hair&Makeup</option>
									<option value="stylist">Stylist</option>
									<option value="other_use">Other use</option>
								</select>
							</div>
						</div>
					</div>

					<div className="user_contact">
						<span>기본 정보</span>

						<div className="input_container">
							{basicInformation.map((element) => {
								return (
									<>
										<label htmlFor={element.value}>{element.name}</label>
										<input
											id={element.value}
											name={element.value}
											type="text"
											defaultValue={element.default}
										/>
										<div className="public_checkbox_container">
											<label htmlFor={`${element.value}_public`}>공개</label>
											<input
												id={`${element.value}_public`}
												name={`${element.value}_public`}
												type="checkbox"
											/>
										</div>
									</>
								);
							})}
						</div>
					</div>

					<div className="description">
						<span>프로필 소개</span>
						<textarea defaultValue={desc}></textarea>
					</div>

					<button type="submit">프로필 변경</button>
				</form>
			</div>
		</div>
	);
}

export default ProfileEdit;