export interface Users {
    uId: number;
	fullname: string ;
	email: string ;
	mobile: string ;
	pwd: string ;
    avatarPath: string;
	// for end user (default): user and for administrator: admin
	role: string ;
	/**
	 * 0: disconnected 1: connected 2: enabled 3: disabled
	 */
	state: number ;
	nationalCardId: string ;
	location: string ;
	/*
	 * Type: Offer, Supplier
	 */
	userType: string ;
}