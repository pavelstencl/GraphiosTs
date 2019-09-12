type Arrayed<T> = T extends {payload:any}?{[K in keyof T]: K extends 'payload'?T[K][]:T[K]}:T[];
/**
 * swapi: GraphiosTs TypeScript definitions
*/


/**
 * queryType DEFINITIONS
*/


type query = {
	allAssets:{
		payload:Arrayed<object_Asset>['payload'];
		args?:{
			filter:inpob_AssetFilter;
			orderBy:enum_AssetOrderBy;
			skip:s_Int;
			after:s_String;
			before:s_String;
			first:s_Int;
			last:s_Int
		};
	};
	allFilms:{
		payload:Arrayed<object_Film>['payload'];
		args?:{
			filter:inpob_FilmFilter;
			orderBy:enum_FilmOrderBy;
			skip:s_Int;
			after:s_String;
			before:s_String;
			first:s_Int;
			last:s_Int
		};
	};
	allPersons:{
		payload:Arrayed<object_Person>['payload'];
		args?:{
			filter:inpob_PersonFilter;
			orderBy:enum_PersonOrderBy;
			skip:s_Int;
			after:s_String;
			before:s_String;
			first:s_Int;
			last:s_Int
		};
	};
	allPlanets:{
		payload:Arrayed<object_Planet>['payload'];
		args?:{
			filter:inpob_PlanetFilter;
			orderBy:enum_PlanetOrderBy;
			skip:s_Int;
			after:s_String;
			before:s_String;
			first:s_Int;
			last:s_Int
		};
	};
	allSpecies:{
		payload:Arrayed<object_Species>['payload'];
		args?:{
			filter:inpob_SpeciesFilter;
			orderBy:enum_SpeciesOrderBy;
			skip:s_Int;
			after:s_String;
			before:s_String;
			first:s_Int;
			last:s_Int
		};
	};
	allStarships:{
		payload:Arrayed<object_Starship>['payload'];
		args?:{
			filter:inpob_StarshipFilter;
			orderBy:enum_StarshipOrderBy;
			skip:s_Int;
			after:s_String;
			before:s_String;
			first:s_Int;
			last:s_Int
		};
	};
	allVehicles:{
		payload:Arrayed<object_Vehicle>['payload'];
		args?:{
			filter:inpob_VehicleFilter;
			orderBy:enum_VehicleOrderBy;
			skip:s_Int;
			after:s_String;
			before:s_String;
			first:s_Int;
			last:s_Int
		};
	};
	_allAssetsMeta:{
		payload:object__QueryMeta['payload'];
		args?:{
			filter:inpob_AssetFilter;
			orderBy:enum_AssetOrderBy;
			skip:s_Int;
			after:s_String;
			before:s_String;
			first:s_Int;
			last:s_Int
		};
	};
	_allFilmsMeta:{
		payload:object__QueryMeta['payload'];
		args?:{
			filter:inpob_FilmFilter;
			orderBy:enum_FilmOrderBy;
			skip:s_Int;
			after:s_String;
			before:s_String;
			first:s_Int;
			last:s_Int
		};
	};
	_allPersonsMeta:{
		payload:object__QueryMeta['payload'];
		args?:{
			filter:inpob_PersonFilter;
			orderBy:enum_PersonOrderBy;
			skip:s_Int;
			after:s_String;
			before:s_String;
			first:s_Int;
			last:s_Int
		};
	};
	_allPlanetsMeta:{
		payload:object__QueryMeta['payload'];
		args?:{
			filter:inpob_PlanetFilter;
			orderBy:enum_PlanetOrderBy;
			skip:s_Int;
			after:s_String;
			before:s_String;
			first:s_Int;
			last:s_Int
		};
	};
	_allSpeciesMeta:{
		payload:object__QueryMeta['payload'];
		args?:{
			filter:inpob_SpeciesFilter;
			orderBy:enum_SpeciesOrderBy;
			skip:s_Int;
			after:s_String;
			before:s_String;
			first:s_Int;
			last:s_Int
		};
	};
	_allStarshipsMeta:{
		payload:object__QueryMeta['payload'];
		args?:{
			filter:inpob_StarshipFilter;
			orderBy:enum_StarshipOrderBy;
			skip:s_Int;
			after:s_String;
			before:s_String;
			first:s_Int;
			last:s_Int
		};
	};
	_allVehiclesMeta:{
		payload:object__QueryMeta['payload'];
		args?:{
			filter:inpob_VehicleFilter;
			orderBy:enum_VehicleOrderBy;
			skip:s_Int;
			after:s_String;
			before:s_String;
			first:s_Int;
			last:s_Int
		};
	};
	Asset:{
		payload:object_Asset['payload'];
		args?:{
			id:s_ID
		};
	};
	Film:{
		payload:object_Film['payload'];
		args?:{
			id:s_ID;
			title:s_String
		};
	};
	Person:{
		payload:object_Person['payload'];
		args?:{
			id:s_ID;
			name:s_String
		};
	};
	Planet:{
		payload:object_Planet['payload'];
		args?:{
			id:s_ID;
			name:s_String
		};
	};
	Species:{
		payload:object_Species['payload'];
		args?:{
			id:s_ID;
			name:s_String
		};
	};
	Starship:{
		payload:object_Starship['payload'];
		args?:{
			id:s_ID;
			name:s_String
		};
	};
	Vehicle:{
		payload:object_Vehicle['payload'];
		args?:{
			id:s_ID;
			name:s_String
		};
	};
	node:{
		payload:INTERFACE_Node['payload'];
		args:{
			id:s_ID
		};
	}
};
/**
 * END OF queryType DEFINITIONS
*/


/**
 * mutationType DEFINITIONS
*/


type mutation = {
	createAsset:{
		payload:object_Asset['payload'];
		args:{
			fileName:s_String;
			handle:s_String;
			height:s_Float;
			mimeType:s_String;
			size:s_Float;
			url:s_String;
			width:s_Float
		};
	};
	createFilm:{
		payload:object_Film['payload'];
		args:{
			director:s_String;
			episodeId:s_Int;
			isPublished:s_Boolean;
			openingCrawl:s_String;
			producers:s_String[];
			releaseDate:s_DateTime;
			title:s_String;
			charactersIds:s_ID[];
			characters:inpob_FilmcharactersPerson[];
			planetsIds:s_ID[];
			planets:inpob_FilmplanetsPlanet[];
			speciesIds:s_ID[];
			species:inpob_FilmspeciesSpecies[];
			starshipsIds:s_ID[];
			starships:inpob_FilmstarshipsStarship[];
			vehiclesIds:s_ID[];
			vehicles:inpob_FilmvehiclesVehicle[]
		};
	};
	createPerson:{
		payload:object_Person['payload'];
		args:{
			birthYear:s_String;
			eyeColor:enum_PERSON_EYE_COLOR[];
			gender:enum_PERSON_GENDER;
			hairColor:enum_PERSON_HAIR_COLOR[];
			height:s_Int;
			isPublished:s_Boolean;
			mass:s_Float;
			name:s_String;
			skinColor:enum_PERSON_SKIN_COLOR[];
			homeworldId:s_ID;
			homeworld:inpob_PersonhomeworldPlanet;
			filmsIds:s_ID[];
			films:inpob_PersonfilmsFilm[];
			speciesIds:s_ID[];
			species:inpob_PersonspeciesSpecies[];
			starshipsIds:s_ID[];
			starships:inpob_PersonstarshipsStarship[];
			vehiclesIds:s_ID[];
			vehicles:inpob_PersonvehiclesVehicle[]
		};
	};
	createPlanet:{
		payload:object_Planet['payload'];
		args:{
			climate:s_String[];
			diameter:s_Int;
			gravity:s_String;
			isPublished:s_Boolean;
			name:s_String;
			orbitalPeriod:s_Int;
			population:s_Float;
			rotationPeriod:s_Int;
			surfaceWater:s_Float;
			terrain:s_String[];
			filmsIds:s_ID[];
			films:inpob_PlanetfilmsFilm[];
			residentsIds:s_ID[];
			residents:inpob_PlanetresidentsPerson[]
		};
	};
	createSpecies:{
		payload:object_Species['payload'];
		args:{
			averageHeight:s_Int;
			averageLifespan:s_Int;
			classification:s_String;
			designation:s_String;
			eyeColor:enum_SPECIES_EYE_COLOR[];
			hairColor:enum_SPECIES_HAIR_COLOR[];
			isPublished:s_Boolean;
			language:s_String;
			name:s_String;
			skinColor:enum_SPECIES_SKIN_COLOR[];
			filmsIds:s_ID[];
			films:inpob_SpeciesfilmsFilm[];
			peopleIds:s_ID[];
			people:inpob_SpeciespeoplePerson[]
		};
	};
	createStarship:{
		payload:object_Starship['payload'];
		args:{
			cargoCapacity:s_Float;
			class:s_String;
			consumables:s_String;
			costInCredits:s_Float;
			crew:s_Int;
			hyperdriveRating:s_Float;
			isPublished:s_Boolean;
			length:s_Float;
			manufacturer:s_String[];
			maxAtmospheringSpeed:s_Int;
			mglt:s_Int;
			name:s_String;
			passengers:s_Int;
			filmsIds:s_ID[];
			films:inpob_StarshipfilmsFilm[];
			pilotsIds:s_ID[];
			pilots:inpob_StarshippilotsPerson[]
		};
	};
	createVehicle:{
		payload:object_Vehicle['payload'];
		args:{
			cargoCapacity:s_Int;
			class:s_String;
			consumables:s_String;
			costInCredits:s_Int;
			crew:s_Int;
			isPublished:s_Boolean;
			length:s_Float;
			manufacturer:s_String[];
			maxAtmospheringSpeed:s_Int;
			model:s_String;
			name:s_String;
			passengers:s_Int;
			filmsIds:s_ID[];
			films:inpob_VehiclefilmsFilm[];
			pilotsIds:s_ID[];
			pilots:inpob_VehiclepilotsPerson[]
		};
	};
	updateAsset:{
		payload:object_Asset['payload'];
		args:{
			fileName:s_String;
			handle:s_String;
			height:s_Float;
			id:s_ID;
			mimeType:s_String;
			size:s_Float;
			url:s_String;
			width:s_Float
		};
	};
	updateFilm:{
		payload:object_Film['payload'];
		args:{
			director:s_String;
			episodeId:s_Int;
			id:s_ID;
			isPublished:s_Boolean;
			openingCrawl:s_String;
			producers:s_String[];
			releaseDate:s_DateTime;
			title:s_String;
			charactersIds:s_ID[];
			characters:inpob_FilmcharactersPerson[];
			planetsIds:s_ID[];
			planets:inpob_FilmplanetsPlanet[];
			speciesIds:s_ID[];
			species:inpob_FilmspeciesSpecies[];
			starshipsIds:s_ID[];
			starships:inpob_FilmstarshipsStarship[];
			vehiclesIds:s_ID[];
			vehicles:inpob_FilmvehiclesVehicle[]
		};
	};
	updatePerson:{
		payload:object_Person['payload'];
		args:{
			birthYear:s_String;
			eyeColor:enum_PERSON_EYE_COLOR[];
			gender:enum_PERSON_GENDER;
			hairColor:enum_PERSON_HAIR_COLOR[];
			height:s_Int;
			id:s_ID;
			isPublished:s_Boolean;
			mass:s_Float;
			name:s_String;
			skinColor:enum_PERSON_SKIN_COLOR[];
			homeworldId:s_ID;
			homeworld:inpob_PersonhomeworldPlanet;
			filmsIds:s_ID[];
			films:inpob_PersonfilmsFilm[];
			speciesIds:s_ID[];
			species:inpob_PersonspeciesSpecies[];
			starshipsIds:s_ID[];
			starships:inpob_PersonstarshipsStarship[];
			vehiclesIds:s_ID[];
			vehicles:inpob_PersonvehiclesVehicle[]
		};
	};
	updatePlanet:{
		payload:object_Planet['payload'];
		args:{
			climate:s_String[];
			diameter:s_Int;
			gravity:s_String;
			id:s_ID;
			isPublished:s_Boolean;
			name:s_String;
			orbitalPeriod:s_Int;
			population:s_Float;
			rotationPeriod:s_Int;
			surfaceWater:s_Float;
			terrain:s_String[];
			filmsIds:s_ID[];
			films:inpob_PlanetfilmsFilm[];
			residentsIds:s_ID[];
			residents:inpob_PlanetresidentsPerson[]
		};
	};
	updateSpecies:{
		payload:object_Species['payload'];
		args:{
			averageHeight:s_Int;
			averageLifespan:s_Int;
			classification:s_String;
			designation:s_String;
			eyeColor:enum_SPECIES_EYE_COLOR[];
			hairColor:enum_SPECIES_HAIR_COLOR[];
			id:s_ID;
			isPublished:s_Boolean;
			language:s_String;
			name:s_String;
			skinColor:enum_SPECIES_SKIN_COLOR[];
			filmsIds:s_ID[];
			films:inpob_SpeciesfilmsFilm[];
			peopleIds:s_ID[];
			people:inpob_SpeciespeoplePerson[]
		};
	};
	updateStarship:{
		payload:object_Starship['payload'];
		args:{
			cargoCapacity:s_Float;
			class:s_String;
			consumables:s_String;
			costInCredits:s_Float;
			crew:s_Int;
			hyperdriveRating:s_Float;
			id:s_ID;
			isPublished:s_Boolean;
			length:s_Float;
			manufacturer:s_String[];
			maxAtmospheringSpeed:s_Int;
			mglt:s_Int;
			name:s_String;
			passengers:s_Int;
			filmsIds:s_ID[];
			films:inpob_StarshipfilmsFilm[];
			pilotsIds:s_ID[];
			pilots:inpob_StarshippilotsPerson[]
		};
	};
	updateVehicle:{
		payload:object_Vehicle['payload'];
		args:{
			cargoCapacity:s_Int;
			class:s_String;
			consumables:s_String;
			costInCredits:s_Int;
			crew:s_Int;
			id:s_ID;
			isPublished:s_Boolean;
			length:s_Float;
			manufacturer:s_String[];
			maxAtmospheringSpeed:s_Int;
			model:s_String;
			name:s_String;
			passengers:s_Int;
			filmsIds:s_ID[];
			films:inpob_VehiclefilmsFilm[];
			pilotsIds:s_ID[];
			pilots:inpob_VehiclepilotsPerson[]
		};
	};
	updateOrCreateAsset:{
		payload:object_Asset['payload'];
		args:{
			update:inpob_UpdateAsset;
			create:inpob_CreateAsset
		};
	};
	updateOrCreateFilm:{
		payload:object_Film['payload'];
		args:{
			update:inpob_UpdateFilm;
			create:inpob_CreateFilm
		};
	};
	updateOrCreatePerson:{
		payload:object_Person['payload'];
		args:{
			update:inpob_UpdatePerson;
			create:inpob_CreatePerson
		};
	};
	updateOrCreatePlanet:{
		payload:object_Planet['payload'];
		args:{
			update:inpob_UpdatePlanet;
			create:inpob_CreatePlanet
		};
	};
	updateOrCreateSpecies:{
		payload:object_Species['payload'];
		args:{
			update:inpob_UpdateSpecies;
			create:inpob_CreateSpecies
		};
	};
	updateOrCreateStarship:{
		payload:object_Starship['payload'];
		args:{
			update:inpob_UpdateStarship;
			create:inpob_CreateStarship
		};
	};
	updateOrCreateVehicle:{
		payload:object_Vehicle['payload'];
		args:{
			update:inpob_UpdateVehicle;
			create:inpob_CreateVehicle
		};
	};
	deleteAsset:{
		payload:object_Asset['payload'];
		args:{
			id:s_ID
		};
	};
	deleteFilm:{
		payload:object_Film['payload'];
		args:{
			id:s_ID
		};
	};
	deletePerson:{
		payload:object_Person['payload'];
		args:{
			id:s_ID
		};
	};
	deletePlanet:{
		payload:object_Planet['payload'];
		args:{
			id:s_ID
		};
	};
	deleteSpecies:{
		payload:object_Species['payload'];
		args:{
			id:s_ID
		};
	};
	deleteStarship:{
		payload:object_Starship['payload'];
		args:{
			id:s_ID
		};
	};
	deleteVehicle:{
		payload:object_Vehicle['payload'];
		args:{
			id:s_ID
		};
	};
	addToFilmPlanets:{
		payload:object_AddToFilmPlanetsPayload['payload'];
		args:{
			planetsPlanetId:s_ID;
			filmsFilmId:s_ID
		};
	};
	addToFilmSpecies:{
		payload:object_AddToFilmSpeciesPayload['payload'];
		args:{
			speciesSpeciesId:s_ID;
			filmsFilmId:s_ID
		};
	};
	addToFilmStarships:{
		payload:object_AddToFilmStarshipsPayload['payload'];
		args:{
			starshipsStarshipId:s_ID;
			filmsFilmId:s_ID
		};
	};
	addToFilmVehicles:{
		payload:object_AddToFilmVehiclesPayload['payload'];
		args:{
			vehiclesVehicleId:s_ID;
			filmsFilmId:s_ID
		};
	};
	addToPeopleFilm:{
		payload:object_AddToPeopleFilmPayload['payload'];
		args:{
			filmsFilmId:s_ID;
			charactersPersonId:s_ID
		};
	};
	addToPeoplePlanet:{
		payload:object_AddToPeoplePlanetPayload['payload'];
		args:{
			homeworldPlanetId:s_ID;
			residentsPersonId:s_ID
		};
	};
	addToPeopleSpecies:{
		payload:object_AddToPeopleSpeciesPayload['payload'];
		args:{
			speciesSpeciesId:s_ID;
			peoplePersonId:s_ID
		};
	};
	addToPeopleStarships:{
		payload:object_AddToPeopleStarshipsPayload['payload'];
		args:{
			starshipsStarshipId:s_ID;
			pilotsPersonId:s_ID
		};
	};
	addToPeopleVehicles:{
		payload:object_AddToPeopleVehiclesPayload['payload'];
		args:{
			vehiclesVehicleId:s_ID;
			pilotsPersonId:s_ID
		};
	};
	removeFromFilmPlanets:{
		payload:object_RemoveFromFilmPlanetsPayload['payload'];
		args:{
			planetsPlanetId:s_ID;
			filmsFilmId:s_ID
		};
	};
	removeFromFilmSpecies:{
		payload:object_RemoveFromFilmSpeciesPayload['payload'];
		args:{
			speciesSpeciesId:s_ID;
			filmsFilmId:s_ID
		};
	};
	removeFromFilmStarships:{
		payload:object_RemoveFromFilmStarshipsPayload['payload'];
		args:{
			starshipsStarshipId:s_ID;
			filmsFilmId:s_ID
		};
	};
	removeFromFilmVehicles:{
		payload:object_RemoveFromFilmVehiclesPayload['payload'];
		args:{
			vehiclesVehicleId:s_ID;
			filmsFilmId:s_ID
		};
	};
	removeFromPeopleFilm:{
		payload:object_RemoveFromPeopleFilmPayload['payload'];
		args:{
			filmsFilmId:s_ID;
			charactersPersonId:s_ID
		};
	};
	removeFromPeoplePlanet:{
		payload:object_RemoveFromPeoplePlanetPayload['payload'];
		args:{
			homeworldPlanetId:s_ID;
			residentsPersonId:s_ID
		};
	};
	removeFromPeopleSpecies:{
		payload:object_RemoveFromPeopleSpeciesPayload['payload'];
		args:{
			speciesSpeciesId:s_ID;
			peoplePersonId:s_ID
		};
	};
	removeFromPeopleStarships:{
		payload:object_RemoveFromPeopleStarshipsPayload['payload'];
		args:{
			starshipsStarshipId:s_ID;
			pilotsPersonId:s_ID
		};
	};
	removeFromPeopleVehicles:{
		payload:object_RemoveFromPeopleVehiclesPayload['payload'];
		args:{
			vehiclesVehicleId:s_ID;
			pilotsPersonId:s_ID
		};
	};
	invokeFunction:{
		payload:object_InvokeFunctionPayload['payload'];
		args:{
			input:inpob_InvokeFunctionInput
		};
	}
};
/**
 * END OF mutationType DEFINITIONS
*/


/**
 * subscriptionType DEFINITIONS
*/


type subscription = {
	Asset:{
		payload:object_AssetSubscriptionPayload['payload'];
		args?:{
			filter:inpob_AssetSubscriptionFilter
		};
	};
	Film:{
		payload:object_FilmSubscriptionPayload['payload'];
		args?:{
			filter:inpob_FilmSubscriptionFilter
		};
	};
	Person:{
		payload:object_PersonSubscriptionPayload['payload'];
		args?:{
			filter:inpob_PersonSubscriptionFilter
		};
	};
	Planet:{
		payload:object_PlanetSubscriptionPayload['payload'];
		args?:{
			filter:inpob_PlanetSubscriptionFilter
		};
	};
	Species:{
		payload:object_SpeciesSubscriptionPayload['payload'];
		args?:{
			filter:inpob_SpeciesSubscriptionFilter
		};
	};
	Starship:{
		payload:object_StarshipSubscriptionPayload['payload'];
		args?:{
			filter:inpob_StarshipSubscriptionFilter
		};
	};
	Vehicle:{
		payload:object_VehicleSubscriptionPayload['payload'];
		args?:{
			filter:inpob_VehicleSubscriptionFilter
		};
	}
};
/**
 * END OF subscriptionType DEFINITIONS
*/


/**
 * types DEFINITIONS
*/


export type object_AddToFilmPlanetsPayload = {
	payload:{
		filmsFilm?:query["Film"];
		planetsPlanet?:query["Planet"]
	};
};
export type object_AddToFilmSpeciesPayload = {
	payload:{
		filmsFilm?:query["Film"];
		speciesSpecies?:query["Species"]
	};
};
export type object_AddToFilmStarshipsPayload = {
	payload:{
		filmsFilm?:query["Film"];
		starshipsStarship?:query["Starship"]
	};
};
export type object_AddToFilmVehiclesPayload = {
	payload:{
		filmsFilm?:query["Film"];
		vehiclesVehicle?:query["Vehicle"]
	};
};
export type object_AddToPeopleFilmPayload = {
	payload:{
		charactersPerson?:query["Person"];
		filmsFilm?:query["Film"]
	};
};
export type object_AddToPeoplePlanetPayload = {
	payload:{
		residentsPerson?:query["Person"];
		homeworldPlanet?:query["Planet"]
	};
};
export type object_AddToPeopleSpeciesPayload = {
	payload:{
		peoplePerson?:query["Person"];
		speciesSpecies?:query["Species"]
	};
};
export type object_AddToPeopleStarshipsPayload = {
	payload:{
		pilotsPerson?:query["Person"];
		starshipsStarship?:query["Starship"]
	};
};
export type object_AddToPeopleVehiclesPayload = {
	payload:{
		pilotsPerson?:query["Person"];
		vehiclesVehicle?:query["Vehicle"]
	};
};
export type object_AssetPreviousValues = {
	payload:{
		createdAt:s_DateTime;
		/**
		 * Original File Name
		*/
		fileName:s_String;
		/**
		 * The File Handle
		*/
		handle:s_String;
		/**
		 * The height of the file in case it is an image
		*/
		height?:s_Float;
		id:s_ID;
		/**
		 * The Mime Type
		*/
		mimeType?:s_String;
		/**
		 * The Size Of The File
		*/
		size:s_Float;
		updatedAt:s_DateTime;
		/**
		 * The Url Of The Asset
		*/
		url:s_String;
		/**
		 * The width of the file in case it is an image
		*/
		width?:s_Float
	};
};
export type inpob_AssetSubscriptionFilter = {
		/**
		 * Logical AND on all given filters.
		*/
		AND:inpob_AssetSubscriptionFilter[];
		/**
		 * Logical OR on all given filters.
		*/
		OR:inpob_AssetSubscriptionFilter[];
		/**
		 * The subscription event gets dispatched when it's listed in mutation_in
		*/
		mutation_in:enum__ModelMutationType[];
		/**
		 * The subscription event gets only dispatched when one of the updated fields names is included in this list
		*/
		updatedFields_contains?:s_String;
		/**
		 * The subscription event gets only dispatched when all of the field names included in this list have been updated
		*/
		updatedFields_contains_every:s_String[];
		/**
		 * The subscription event gets only dispatched when some of the field names included in this list have been updated
		*/
		updatedFields_contains_some:s_String[];
		node?:inpob_AssetSubscriptionFilterNode
	};
export type inpob_AssetSubscriptionFilterNode = {
		createdAt?:s_DateTime;
		/**
		 * All values that are not equal to given value.
		*/
		createdAt_not?:s_DateTime;
		/**
		 * All values that are contained in given list.
		*/
		createdAt_in:s_DateTime[];
		/**
		 * All values that are not contained in given list.
		*/
		createdAt_not_in:s_DateTime[];
		/**
		 * All values less than the given value.
		*/
		createdAt_lt?:s_DateTime;
		/**
		 * All values less than or equal the given value.
		*/
		createdAt_lte?:s_DateTime;
		/**
		 * All values greater than the given value.
		*/
		createdAt_gt?:s_DateTime;
		/**
		 * All values greater than or equal the given value.
		*/
		createdAt_gte?:s_DateTime;
		fileName?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		fileName_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		fileName_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		fileName_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		fileName_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		fileName_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		fileName_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		fileName_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		fileName_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		fileName_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		fileName_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		fileName_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		fileName_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		fileName_not_ends_with?:s_String;
		handle?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		handle_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		handle_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		handle_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		handle_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		handle_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		handle_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		handle_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		handle_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		handle_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		handle_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		handle_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		handle_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		handle_not_ends_with?:s_String;
		height?:s_Float;
		/**
		 * All values that are not equal to given value.
		*/
		height_not?:s_Float;
		/**
		 * All values that are contained in given list.
		*/
		height_in:s_Float[];
		/**
		 * All values that are not contained in given list.
		*/
		height_not_in:s_Float[];
		/**
		 * All values less than the given value.
		*/
		height_lt?:s_Float;
		/**
		 * All values less than or equal the given value.
		*/
		height_lte?:s_Float;
		/**
		 * All values greater than the given value.
		*/
		height_gt?:s_Float;
		/**
		 * All values greater than or equal the given value.
		*/
		height_gte?:s_Float;
		id?:s_ID;
		/**
		 * All values that are not equal to given value.
		*/
		id_not?:s_ID;
		/**
		 * All values that are contained in given list.
		*/
		id_in:s_ID[];
		/**
		 * All values that are not contained in given list.
		*/
		id_not_in:s_ID[];
		/**
		 * All values less than the given value.
		*/
		id_lt?:s_ID;
		/**
		 * All values less than or equal the given value.
		*/
		id_lte?:s_ID;
		/**
		 * All values greater than the given value.
		*/
		id_gt?:s_ID;
		/**
		 * All values greater than or equal the given value.
		*/
		id_gte?:s_ID;
		/**
		 * All values containing the given string.
		*/
		id_contains?:s_ID;
		/**
		 * All values not containing the given string.
		*/
		id_not_contains?:s_ID;
		/**
		 * All values starting with the given string.
		*/
		id_starts_with?:s_ID;
		/**
		 * All values not starting with the given string.
		*/
		id_not_starts_with?:s_ID;
		/**
		 * All values ending with the given string.
		*/
		id_ends_with?:s_ID;
		/**
		 * All values not ending with the given string.
		*/
		id_not_ends_with?:s_ID;
		mimeType?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		mimeType_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		mimeType_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		mimeType_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		mimeType_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		mimeType_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		mimeType_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		mimeType_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		mimeType_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		mimeType_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		mimeType_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		mimeType_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		mimeType_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		mimeType_not_ends_with?:s_String;
		size?:s_Float;
		/**
		 * All values that are not equal to given value.
		*/
		size_not?:s_Float;
		/**
		 * All values that are contained in given list.
		*/
		size_in:s_Float[];
		/**
		 * All values that are not contained in given list.
		*/
		size_not_in:s_Float[];
		/**
		 * All values less than the given value.
		*/
		size_lt?:s_Float;
		/**
		 * All values less than or equal the given value.
		*/
		size_lte?:s_Float;
		/**
		 * All values greater than the given value.
		*/
		size_gt?:s_Float;
		/**
		 * All values greater than or equal the given value.
		*/
		size_gte?:s_Float;
		updatedAt?:s_DateTime;
		/**
		 * All values that are not equal to given value.
		*/
		updatedAt_not?:s_DateTime;
		/**
		 * All values that are contained in given list.
		*/
		updatedAt_in:s_DateTime[];
		/**
		 * All values that are not contained in given list.
		*/
		updatedAt_not_in:s_DateTime[];
		/**
		 * All values less than the given value.
		*/
		updatedAt_lt?:s_DateTime;
		/**
		 * All values less than or equal the given value.
		*/
		updatedAt_lte?:s_DateTime;
		/**
		 * All values greater than the given value.
		*/
		updatedAt_gt?:s_DateTime;
		/**
		 * All values greater than or equal the given value.
		*/
		updatedAt_gte?:s_DateTime;
		url?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		url_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		url_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		url_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		url_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		url_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		url_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		url_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		url_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		url_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		url_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		url_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		url_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		url_not_ends_with?:s_String;
		width?:s_Float;
		/**
		 * All values that are not equal to given value.
		*/
		width_not?:s_Float;
		/**
		 * All values that are contained in given list.
		*/
		width_in:s_Float[];
		/**
		 * All values that are not contained in given list.
		*/
		width_not_in:s_Float[];
		/**
		 * All values less than the given value.
		*/
		width_lt?:s_Float;
		/**
		 * All values less than or equal the given value.
		*/
		width_lte?:s_Float;
		/**
		 * All values greater than the given value.
		*/
		width_gt?:s_Float;
		/**
		 * All values greater than or equal the given value.
		*/
		width_gte?:s_Float
	};
export type object_AssetSubscriptionPayload = {
	payload:{
		mutation:enum__ModelMutationType;
		node?:query["Asset"];
		updatedFields:s_String[];
		previousValues?:object_AssetPreviousValues
	};
};
export type inpob_CreateAsset = {
		/**
		 * Original File Name
		*/
		fileName:s_String;
		/**
		 * The File Handle
		*/
		handle:s_String;
		/**
		 * The height of the file in case it is an image
		*/
		height?:s_Float;
		/**
		 * The Mime Type
		*/
		mimeType?:s_String;
		/**
		 * The Size Of The File
		*/
		size:s_Float;
		/**
		 * The Url Of The Asset
		*/
		url:s_String;
		/**
		 * The width of the file in case it is an image
		*/
		width?:s_Float
	};
export type inpob_CreateFilm = {
		/**
		 * The name of the director of this film.
		*/
		director?:s_String;
		/**
		 * The episode number of this film.
		*/
		episodeId:s_Int;
		/**
		 * indicates if the record is published
		*/
		isPublished?:s_Boolean;
		/**
		 * The opening paragraphs at the beginning of this film.
		*/
		openingCrawl?:s_String;
		/**
		 * The names of the producers of this film.
		*/
		producers:s_String[];
		/**
		 *  The ISO 8601 date format of film release at original creator country.
		*/
		releaseDate?:s_DateTime;
		/**
		 * The title of this film
		*/
		title:s_String;
		charactersIds:s_ID[];
		characters:inpob_FilmcharactersPerson[];
		planetsIds:s_ID[];
		planets:inpob_FilmplanetsPlanet[];
		speciesIds:s_ID[];
		species:inpob_FilmspeciesSpecies[];
		starshipsIds:s_ID[];
		starships:inpob_FilmstarshipsStarship[];
		vehiclesIds:s_ID[];
		vehicles:inpob_FilmvehiclesVehicle[]
	};
export type inpob_CreatePerson = {
		/**
		 * The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.
		*/
		birthYear?:s_String;
		/**
		 * The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye.
		*/
		eyeColor:enum_PERSON_EYE_COLOR[];
		/**
		 *  The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender.
		*/
		gender?:enum_PERSON_GENDER;
		/**
		 * The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair.
		*/
		hairColor:enum_PERSON_HAIR_COLOR[];
		/**
		 * The height of the person in centimeters.
		*/
		height?:s_Int;
		/**
		 * indicates if the record is published
		*/
		isPublished?:s_Boolean;
		/**
		 * The mass of the person in kilograms.
		*/
		mass?:s_Float;
		/**
		 * The name of this person.
		*/
		name:s_String;
		/**
		 * The skin color of this person.
		*/
		skinColor:enum_PERSON_SKIN_COLOR[];
		homeworldId?:s_ID;
		homeworld?:inpob_PersonhomeworldPlanet;
		filmsIds:s_ID[];
		films:inpob_PersonfilmsFilm[];
		speciesIds:s_ID[];
		species:inpob_PersonspeciesSpecies[];
		starshipsIds:s_ID[];
		starships:inpob_PersonstarshipsStarship[];
		vehiclesIds:s_ID[];
		vehicles:inpob_PersonvehiclesVehicle[]
	};
export type inpob_CreatePlanet = {
		/**
		 * The climate of this planet.
		*/
		climate:s_String[];
		/**
		 * The diameter of this planet in kilometers.
		*/
		diameter?:s_Int;
		/**
		 * A number denoting the gravity of this planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
		*/
		gravity?:s_String;
		/**
		 * indicates if the record is published
		*/
		isPublished?:s_Boolean;
		/**
		 * The name of the planet
		*/
		name:s_String;
		/**
		 * The number of standard days it takes for this planet to complete a single orbit of its local star.
		*/
		orbitalPeriod?:s_Int;
		/**
		 * The average population of sentient beings inhabiting this planet.
		*/
		population?:s_Float;
		/**
		 * The number of standard hours it takes for this planet to complete a single rotation on its axis.
		*/
		rotationPeriod?:s_Int;
		/**
		 * The percentage of the planet surface that is naturally occurring water or bodies of water.
		*/
		surfaceWater?:s_Float;
		/**
		 * The terrain of this planet.
		*/
		terrain:s_String[];
		filmsIds:s_ID[];
		films:inpob_PlanetfilmsFilm[];
		residentsIds:s_ID[];
		residents:inpob_PlanetresidentsPerson[]
	};
export type inpob_CreateSpecies = {
		/**
		 * The average height of this species in centimeters.
		*/
		averageHeight?:s_Int;
		/**
		 * The average lifespan of this species in years.
		*/
		averageLifespan?:s_Int;
		/**
		 * The classification of this species, such as "mammal" or "reptile".
		*/
		classification?:s_String;
		/**
		 * The designation of this species, such as "sentient".
		*/
		designation?:s_String;
		/**
		 * The eye colors for this species, "UNKNOWN" if not known, null if this species does not typically have eyes.
		*/
		eyeColor:enum_SPECIES_EYE_COLOR[];
		/**
		 * The hair colors for this species, "UNKNOWN" if not known, null if this species does not typically have hairs.
		*/
		hairColor:enum_SPECIES_HAIR_COLOR[];
		/**
		 * indicates if the record is published
		*/
		isPublished?:s_Boolean;
		/**
		 * The language commonly spoken by this species.
		*/
		language?:s_String;
		/**
		 * The name of this species.
		*/
		name:s_String;
		/**
		 * The skin colors for this species, "UNKNOWN" if not known, null if this species does not typically have a skin.
		*/
		skinColor:enum_SPECIES_SKIN_COLOR[];
		filmsIds:s_ID[];
		films:inpob_SpeciesfilmsFilm[];
		peopleIds:s_ID[];
		people:inpob_SpeciespeoplePerson[]
	};
export type inpob_CreateStarship = {
		/**
		 * The maximum number of kilograms that this starship can transport.
		*/
		cargoCapacity?:s_Float;
		/**
		 * The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation"
		*/
		class?:s_String;
		/**
		 * The maximum length of time that this starship can provide consumables for its entire crew without having to resupply.
		*/
		consumables?:s_String;
		/**
		 *  The cost of this starship new, in galactic credits.
		*/
		costInCredits?:s_Float;
		/**
		 * The number of personnel needed to run or pilot this starship.
		*/
		crew?:s_Int;
		/**
		 * The class of this starships hyperdrive.
		*/
		hyperdriveRating?:s_Float;
		/**
		 * indicates if the record is published
		*/
		isPublished?:s_Boolean;
		/**
		 * The length of this starship in meters.
		*/
		length?:s_Float;
		/**
		 * The manufacturer of this starship.
		*/
		manufacturer:s_String[];
		/**
		 *  The maximum speed of this starship in the atmosphere. null if this starship is incapable of atmospheric flight.
		*/
		maxAtmospheringSpeed?:s_Int;
		/**
		 * The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe.
		*/
		mglt?:s_Int;
		/**
		 * The name of this starship. The common name, such as "Death Star".
		*/
		name:s_String;
		/**
		 *  The number of non-essential people this starship can transport.
		*/
		passengers?:s_Int;
		filmsIds:s_ID[];
		films:inpob_StarshipfilmsFilm[];
		pilotsIds:s_ID[];
		pilots:inpob_StarshippilotsPerson[]
	};
export type inpob_CreateVehicle = {
		/**
		 * The maximum number of kilograms that this vehicle can transport.
		*/
		cargoCapacity?:s_Int;
		/**
		 *  The class of this vehicle, such as "Wheeled" or "Repulsorcraft".
		*/
		class?:s_String;
		/**
		 * The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply.
		*/
		consumables?:s_String;
		/**
		 * The cost of this vehicle new, in Galactic Credits.
		*/
		costInCredits?:s_Int;
		/**
		 * The number of personnel needed to run or pilot this vehicle.
		*/
		crew?:s_Int;
		/**
		 * indicates if the record is published
		*/
		isPublished?:s_Boolean;
		/**
		 *  The length of this vehicle in meters.
		*/
		length?:s_Float;
		/**
		 * The manufacturer of this vehicle.
		*/
		manufacturer:s_String[];
		/**
		 * The maximum speed of this vehicle in the atmosphere.
		*/
		maxAtmospheringSpeed?:s_Int;
		/**
		 * The model or official name of this vehicle. Such as "All-Terrain Attack Transport".
		*/
		model?:s_String;
		/**
		 * The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike".
		*/
		name:s_String;
		/**
		 * The number of non-essential people this vehicle can transport.
		*/
		passengers?:s_Int;
		filmsIds:s_ID[];
		films:inpob_VehiclefilmsFilm[];
		pilotsIds:s_ID[];
		pilots:inpob_VehiclepilotsPerson[]
	};
export type object_FilmPreviousValues = {
	payload:{
		createdAt:s_DateTime;
		/**
		 * The name of the director of this film.
		*/
		director?:s_String;
		/**
		 * The episode number of this film.
		*/
		episodeId:s_Int;
		id:s_ID;
		/**
		 * indicates if the record is published
		*/
		isPublished:s_Boolean;
		/**
		 * The opening paragraphs at the beginning of this film.
		*/
		openingCrawl?:s_String;
		/**
		 * The names of the producers of this film.
		*/
		producers:s_String[];
		/**
		 *  The ISO 8601 date format of film release at original creator country.
		*/
		releaseDate?:s_DateTime;
		/**
		 * The title of this film
		*/
		title:s_String;
		updatedAt:s_DateTime
	};
};
export type inpob_FilmSubscriptionFilter = {
		/**
		 * Logical AND on all given filters.
		*/
		AND:inpob_FilmSubscriptionFilter[];
		/**
		 * Logical OR on all given filters.
		*/
		OR:inpob_FilmSubscriptionFilter[];
		/**
		 * The subscription event gets dispatched when it's listed in mutation_in
		*/
		mutation_in:enum__ModelMutationType[];
		/**
		 * The subscription event gets only dispatched when one of the updated fields names is included in this list
		*/
		updatedFields_contains?:s_String;
		/**
		 * The subscription event gets only dispatched when all of the field names included in this list have been updated
		*/
		updatedFields_contains_every:s_String[];
		/**
		 * The subscription event gets only dispatched when some of the field names included in this list have been updated
		*/
		updatedFields_contains_some:s_String[];
		node?:inpob_FilmSubscriptionFilterNode
	};
export type inpob_FilmSubscriptionFilterNode = {
		createdAt?:s_DateTime;
		/**
		 * All values that are not equal to given value.
		*/
		createdAt_not?:s_DateTime;
		/**
		 * All values that are contained in given list.
		*/
		createdAt_in:s_DateTime[];
		/**
		 * All values that are not contained in given list.
		*/
		createdAt_not_in:s_DateTime[];
		/**
		 * All values less than the given value.
		*/
		createdAt_lt?:s_DateTime;
		/**
		 * All values less than or equal the given value.
		*/
		createdAt_lte?:s_DateTime;
		/**
		 * All values greater than the given value.
		*/
		createdAt_gt?:s_DateTime;
		/**
		 * All values greater than or equal the given value.
		*/
		createdAt_gte?:s_DateTime;
		director?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		director_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		director_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		director_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		director_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		director_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		director_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		director_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		director_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		director_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		director_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		director_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		director_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		director_not_ends_with?:s_String;
		episodeId?:s_Int;
		/**
		 * All values that are not equal to given value.
		*/
		episodeId_not?:s_Int;
		/**
		 * All values that are contained in given list.
		*/
		episodeId_in:s_Int[];
		/**
		 * All values that are not contained in given list.
		*/
		episodeId_not_in:s_Int[];
		/**
		 * All values less than the given value.
		*/
		episodeId_lt?:s_Int;
		/**
		 * All values less than or equal the given value.
		*/
		episodeId_lte?:s_Int;
		/**
		 * All values greater than the given value.
		*/
		episodeId_gt?:s_Int;
		/**
		 * All values greater than or equal the given value.
		*/
		episodeId_gte?:s_Int;
		id?:s_ID;
		/**
		 * All values that are not equal to given value.
		*/
		id_not?:s_ID;
		/**
		 * All values that are contained in given list.
		*/
		id_in:s_ID[];
		/**
		 * All values that are not contained in given list.
		*/
		id_not_in:s_ID[];
		/**
		 * All values less than the given value.
		*/
		id_lt?:s_ID;
		/**
		 * All values less than or equal the given value.
		*/
		id_lte?:s_ID;
		/**
		 * All values greater than the given value.
		*/
		id_gt?:s_ID;
		/**
		 * All values greater than or equal the given value.
		*/
		id_gte?:s_ID;
		/**
		 * All values containing the given string.
		*/
		id_contains?:s_ID;
		/**
		 * All values not containing the given string.
		*/
		id_not_contains?:s_ID;
		/**
		 * All values starting with the given string.
		*/
		id_starts_with?:s_ID;
		/**
		 * All values not starting with the given string.
		*/
		id_not_starts_with?:s_ID;
		/**
		 * All values ending with the given string.
		*/
		id_ends_with?:s_ID;
		/**
		 * All values not ending with the given string.
		*/
		id_not_ends_with?:s_ID;
		isPublished?:s_Boolean;
		/**
		 * All values that are not equal to given value.
		*/
		isPublished_not?:s_Boolean;
		openingCrawl?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		openingCrawl_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		openingCrawl_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		openingCrawl_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		openingCrawl_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		openingCrawl_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		openingCrawl_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		openingCrawl_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		openingCrawl_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		openingCrawl_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		openingCrawl_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		openingCrawl_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		openingCrawl_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		openingCrawl_not_ends_with?:s_String;
		releaseDate?:s_DateTime;
		/**
		 * All values that are not equal to given value.
		*/
		releaseDate_not?:s_DateTime;
		/**
		 * All values that are contained in given list.
		*/
		releaseDate_in:s_DateTime[];
		/**
		 * All values that are not contained in given list.
		*/
		releaseDate_not_in:s_DateTime[];
		/**
		 * All values less than the given value.
		*/
		releaseDate_lt?:s_DateTime;
		/**
		 * All values less than or equal the given value.
		*/
		releaseDate_lte?:s_DateTime;
		/**
		 * All values greater than the given value.
		*/
		releaseDate_gt?:s_DateTime;
		/**
		 * All values greater than or equal the given value.
		*/
		releaseDate_gte?:s_DateTime;
		title?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		title_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		title_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		title_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		title_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		title_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		title_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		title_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		title_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		title_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		title_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		title_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		title_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		title_not_ends_with?:s_String;
		updatedAt?:s_DateTime;
		/**
		 * All values that are not equal to given value.
		*/
		updatedAt_not?:s_DateTime;
		/**
		 * All values that are contained in given list.
		*/
		updatedAt_in:s_DateTime[];
		/**
		 * All values that are not contained in given list.
		*/
		updatedAt_not_in:s_DateTime[];
		/**
		 * All values less than the given value.
		*/
		updatedAt_lt?:s_DateTime;
		/**
		 * All values less than or equal the given value.
		*/
		updatedAt_lte?:s_DateTime;
		/**
		 * All values greater than the given value.
		*/
		updatedAt_gt?:s_DateTime;
		/**
		 * All values greater than or equal the given value.
		*/
		updatedAt_gte?:s_DateTime;
		characters_every?:inpob_PersonFilter;
		characters_some?:inpob_PersonFilter;
		characters_none?:inpob_PersonFilter;
		planets_every?:inpob_PlanetFilter;
		planets_some?:inpob_PlanetFilter;
		planets_none?:inpob_PlanetFilter;
		species_every?:inpob_SpeciesFilter;
		species_some?:inpob_SpeciesFilter;
		species_none?:inpob_SpeciesFilter;
		starships_every?:inpob_StarshipFilter;
		starships_some?:inpob_StarshipFilter;
		starships_none?:inpob_StarshipFilter;
		vehicles_every?:inpob_VehicleFilter;
		vehicles_some?:inpob_VehicleFilter;
		vehicles_none?:inpob_VehicleFilter
	};
export type object_FilmSubscriptionPayload = {
	payload:{
		mutation:enum__ModelMutationType;
		node?:query["Film"];
		updatedFields:s_String[];
		previousValues?:object_FilmPreviousValues
	};
};
export type inpob_FilmcharactersPerson = {
		/**
		 * The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.
		*/
		birthYear?:s_String;
		/**
		 * The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye.
		*/
		eyeColor:enum_PERSON_EYE_COLOR[];
		/**
		 *  The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender.
		*/
		gender?:enum_PERSON_GENDER;
		/**
		 * The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair.
		*/
		hairColor:enum_PERSON_HAIR_COLOR[];
		/**
		 * The height of the person in centimeters.
		*/
		height?:s_Int;
		/**
		 * indicates if the record is published
		*/
		isPublished?:s_Boolean;
		/**
		 * The mass of the person in kilograms.
		*/
		mass?:s_Float;
		/**
		 * The name of this person.
		*/
		name:s_String;
		/**
		 * The skin color of this person.
		*/
		skinColor:enum_PERSON_SKIN_COLOR[];
		homeworldId?:s_ID;
		homeworld?:inpob_PersonhomeworldPlanet;
		filmsIds:s_ID[];
		films:inpob_PersonfilmsFilm[];
		speciesIds:s_ID[];
		species:inpob_PersonspeciesSpecies[];
		starshipsIds:s_ID[];
		starships:inpob_PersonstarshipsStarship[];
		vehiclesIds:s_ID[];
		vehicles:inpob_PersonvehiclesVehicle[]
	};
export type inpob_FilmplanetsPlanet = {
		/**
		 * The climate of this planet.
		*/
		climate:s_String[];
		/**
		 * The diameter of this planet in kilometers.
		*/
		diameter?:s_Int;
		/**
		 * A number denoting the gravity of this planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
		*/
		gravity?:s_String;
		/**
		 * indicates if the record is published
		*/
		isPublished?:s_Boolean;
		/**
		 * The name of the planet
		*/
		name:s_String;
		/**
		 * The number of standard days it takes for this planet to complete a single orbit of its local star.
		*/
		orbitalPeriod?:s_Int;
		/**
		 * The average population of sentient beings inhabiting this planet.
		*/
		population?:s_Float;
		/**
		 * The number of standard hours it takes for this planet to complete a single rotation on its axis.
		*/
		rotationPeriod?:s_Int;
		/**
		 * The percentage of the planet surface that is naturally occurring water or bodies of water.
		*/
		surfaceWater?:s_Float;
		/**
		 * The terrain of this planet.
		*/
		terrain:s_String[];
		filmsIds:s_ID[];
		films:inpob_PlanetfilmsFilm[];
		residentsIds:s_ID[];
		residents:inpob_PlanetresidentsPerson[]
	};
export type inpob_FilmspeciesSpecies = {
		/**
		 * The average height of this species in centimeters.
		*/
		averageHeight?:s_Int;
		/**
		 * The average lifespan of this species in years.
		*/
		averageLifespan?:s_Int;
		/**
		 * The classification of this species, such as "mammal" or "reptile".
		*/
		classification?:s_String;
		/**
		 * The designation of this species, such as "sentient".
		*/
		designation?:s_String;
		/**
		 * The eye colors for this species, "UNKNOWN" if not known, null if this species does not typically have eyes.
		*/
		eyeColor:enum_SPECIES_EYE_COLOR[];
		/**
		 * The hair colors for this species, "UNKNOWN" if not known, null if this species does not typically have hairs.
		*/
		hairColor:enum_SPECIES_HAIR_COLOR[];
		/**
		 * indicates if the record is published
		*/
		isPublished?:s_Boolean;
		/**
		 * The language commonly spoken by this species.
		*/
		language?:s_String;
		/**
		 * The name of this species.
		*/
		name:s_String;
		/**
		 * The skin colors for this species, "UNKNOWN" if not known, null if this species does not typically have a skin.
		*/
		skinColor:enum_SPECIES_SKIN_COLOR[];
		filmsIds:s_ID[];
		films:inpob_SpeciesfilmsFilm[];
		peopleIds:s_ID[];
		people:inpob_SpeciespeoplePerson[]
	};
export type inpob_FilmstarshipsStarship = {
		/**
		 * The maximum number of kilograms that this starship can transport.
		*/
		cargoCapacity?:s_Float;
		/**
		 * The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation"
		*/
		class?:s_String;
		/**
		 * The maximum length of time that this starship can provide consumables for its entire crew without having to resupply.
		*/
		consumables?:s_String;
		/**
		 *  The cost of this starship new, in galactic credits.
		*/
		costInCredits?:s_Float;
		/**
		 * The number of personnel needed to run or pilot this starship.
		*/
		crew?:s_Int;
		/**
		 * The class of this starships hyperdrive.
		*/
		hyperdriveRating?:s_Float;
		/**
		 * indicates if the record is published
		*/
		isPublished?:s_Boolean;
		/**
		 * The length of this starship in meters.
		*/
		length?:s_Float;
		/**
		 * The manufacturer of this starship.
		*/
		manufacturer:s_String[];
		/**
		 *  The maximum speed of this starship in the atmosphere. null if this starship is incapable of atmospheric flight.
		*/
		maxAtmospheringSpeed?:s_Int;
		/**
		 * The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe.
		*/
		mglt?:s_Int;
		/**
		 * The name of this starship. The common name, such as "Death Star".
		*/
		name:s_String;
		/**
		 *  The number of non-essential people this starship can transport.
		*/
		passengers?:s_Int;
		filmsIds:s_ID[];
		films:inpob_StarshipfilmsFilm[];
		pilotsIds:s_ID[];
		pilots:inpob_StarshippilotsPerson[]
	};
export type inpob_FilmvehiclesVehicle = {
		/**
		 * The maximum number of kilograms that this vehicle can transport.
		*/
		cargoCapacity?:s_Int;
		/**
		 *  The class of this vehicle, such as "Wheeled" or "Repulsorcraft".
		*/
		class?:s_String;
		/**
		 * The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply.
		*/
		consumables?:s_String;
		/**
		 * The cost of this vehicle new, in Galactic Credits.
		*/
		costInCredits?:s_Int;
		/**
		 * The number of personnel needed to run or pilot this vehicle.
		*/
		crew?:s_Int;
		/**
		 * indicates if the record is published
		*/
		isPublished?:s_Boolean;
		/**
		 *  The length of this vehicle in meters.
		*/
		length?:s_Float;
		/**
		 * The manufacturer of this vehicle.
		*/
		manufacturer:s_String[];
		/**
		 * The maximum speed of this vehicle in the atmosphere.
		*/
		maxAtmospheringSpeed?:s_Int;
		/**
		 * The model or official name of this vehicle. Such as "All-Terrain Attack Transport".
		*/
		model?:s_String;
		/**
		 * The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike".
		*/
		name:s_String;
		/**
		 * The number of non-essential people this vehicle can transport.
		*/
		passengers?:s_Int;
		filmsIds:s_ID[];
		films:inpob_VehiclefilmsFilm[];
		pilotsIds:s_ID[];
		pilots:inpob_VehiclepilotsPerson[]
	};
export type inpob_InvokeFunctionInput = {
		name:s_String;
		input:s_String;
		clientMutationId?:s_String
	};
export type object_InvokeFunctionPayload = {
	payload:{
		result:s_String;
		clientMutationId?:s_String
	};
};
export type object_PersonPreviousValues = {
	payload:{
		/**
		 * The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.
		*/
		birthYear?:s_String;
		createdAt:s_DateTime;
		/**
		 * The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye.
		*/
		eyeColor:enum_PERSON_EYE_COLOR[];
		/**
		 *  The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender.
		*/
		gender?:enum_PERSON_GENDER;
		/**
		 * The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair.
		*/
		hairColor:enum_PERSON_HAIR_COLOR[];
		/**
		 * The height of the person in centimeters.
		*/
		height?:s_Int;
		id:s_ID;
		/**
		 * indicates if the record is published
		*/
		isPublished:s_Boolean;
		/**
		 * The mass of the person in kilograms.
		*/
		mass?:s_Float;
		/**
		 * The name of this person.
		*/
		name:s_String;
		/**
		 * The skin color of this person.
		*/
		skinColor:enum_PERSON_SKIN_COLOR[];
		updatedAt:s_DateTime
	};
};
export type inpob_PersonSubscriptionFilter = {
		/**
		 * Logical AND on all given filters.
		*/
		AND:inpob_PersonSubscriptionFilter[];
		/**
		 * Logical OR on all given filters.
		*/
		OR:inpob_PersonSubscriptionFilter[];
		/**
		 * The subscription event gets dispatched when it's listed in mutation_in
		*/
		mutation_in:enum__ModelMutationType[];
		/**
		 * The subscription event gets only dispatched when one of the updated fields names is included in this list
		*/
		updatedFields_contains?:s_String;
		/**
		 * The subscription event gets only dispatched when all of the field names included in this list have been updated
		*/
		updatedFields_contains_every:s_String[];
		/**
		 * The subscription event gets only dispatched when some of the field names included in this list have been updated
		*/
		updatedFields_contains_some:s_String[];
		node?:inpob_PersonSubscriptionFilterNode
	};
export type inpob_PersonSubscriptionFilterNode = {
		birthYear?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		birthYear_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		birthYear_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		birthYear_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		birthYear_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		birthYear_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		birthYear_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		birthYear_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		birthYear_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		birthYear_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		birthYear_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		birthYear_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		birthYear_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		birthYear_not_ends_with?:s_String;
		createdAt?:s_DateTime;
		/**
		 * All values that are not equal to given value.
		*/
		createdAt_not?:s_DateTime;
		/**
		 * All values that are contained in given list.
		*/
		createdAt_in:s_DateTime[];
		/**
		 * All values that are not contained in given list.
		*/
		createdAt_not_in:s_DateTime[];
		/**
		 * All values less than the given value.
		*/
		createdAt_lt?:s_DateTime;
		/**
		 * All values less than or equal the given value.
		*/
		createdAt_lte?:s_DateTime;
		/**
		 * All values greater than the given value.
		*/
		createdAt_gt?:s_DateTime;
		/**
		 * All values greater than or equal the given value.
		*/
		createdAt_gte?:s_DateTime;
		gender?:enum_PERSON_GENDER;
		/**
		 * All values that are not equal to given value.
		*/
		gender_not?:enum_PERSON_GENDER;
		/**
		 * All values that are contained in given list.
		*/
		gender_in:enum_PERSON_GENDER[];
		/**
		 * All values that are not contained in given list.
		*/
		gender_not_in:enum_PERSON_GENDER[];
		height?:s_Int;
		/**
		 * All values that are not equal to given value.
		*/
		height_not?:s_Int;
		/**
		 * All values that are contained in given list.
		*/
		height_in:s_Int[];
		/**
		 * All values that are not contained in given list.
		*/
		height_not_in:s_Int[];
		/**
		 * All values less than the given value.
		*/
		height_lt?:s_Int;
		/**
		 * All values less than or equal the given value.
		*/
		height_lte?:s_Int;
		/**
		 * All values greater than the given value.
		*/
		height_gt?:s_Int;
		/**
		 * All values greater than or equal the given value.
		*/
		height_gte?:s_Int;
		id?:s_ID;
		/**
		 * All values that are not equal to given value.
		*/
		id_not?:s_ID;
		/**
		 * All values that are contained in given list.
		*/
		id_in:s_ID[];
		/**
		 * All values that are not contained in given list.
		*/
		id_not_in:s_ID[];
		/**
		 * All values less than the given value.
		*/
		id_lt?:s_ID;
		/**
		 * All values less than or equal the given value.
		*/
		id_lte?:s_ID;
		/**
		 * All values greater than the given value.
		*/
		id_gt?:s_ID;
		/**
		 * All values greater than or equal the given value.
		*/
		id_gte?:s_ID;
		/**
		 * All values containing the given string.
		*/
		id_contains?:s_ID;
		/**
		 * All values not containing the given string.
		*/
		id_not_contains?:s_ID;
		/**
		 * All values starting with the given string.
		*/
		id_starts_with?:s_ID;
		/**
		 * All values not starting with the given string.
		*/
		id_not_starts_with?:s_ID;
		/**
		 * All values ending with the given string.
		*/
		id_ends_with?:s_ID;
		/**
		 * All values not ending with the given string.
		*/
		id_not_ends_with?:s_ID;
		isPublished?:s_Boolean;
		/**
		 * All values that are not equal to given value.
		*/
		isPublished_not?:s_Boolean;
		mass?:s_Float;
		/**
		 * All values that are not equal to given value.
		*/
		mass_not?:s_Float;
		/**
		 * All values that are contained in given list.
		*/
		mass_in:s_Float[];
		/**
		 * All values that are not contained in given list.
		*/
		mass_not_in:s_Float[];
		/**
		 * All values less than the given value.
		*/
		mass_lt?:s_Float;
		/**
		 * All values less than or equal the given value.
		*/
		mass_lte?:s_Float;
		/**
		 * All values greater than the given value.
		*/
		mass_gt?:s_Float;
		/**
		 * All values greater than or equal the given value.
		*/
		mass_gte?:s_Float;
		name?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		name_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		name_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		name_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		name_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		name_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		name_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		name_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		name_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		name_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		name_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		name_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		name_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		name_not_ends_with?:s_String;
		updatedAt?:s_DateTime;
		/**
		 * All values that are not equal to given value.
		*/
		updatedAt_not?:s_DateTime;
		/**
		 * All values that are contained in given list.
		*/
		updatedAt_in:s_DateTime[];
		/**
		 * All values that are not contained in given list.
		*/
		updatedAt_not_in:s_DateTime[];
		/**
		 * All values less than the given value.
		*/
		updatedAt_lt?:s_DateTime;
		/**
		 * All values less than or equal the given value.
		*/
		updatedAt_lte?:s_DateTime;
		/**
		 * All values greater than the given value.
		*/
		updatedAt_gt?:s_DateTime;
		/**
		 * All values greater than or equal the given value.
		*/
		updatedAt_gte?:s_DateTime;
		films_every?:inpob_FilmFilter;
		films_some?:inpob_FilmFilter;
		films_none?:inpob_FilmFilter;
		homeworld?:inpob_PlanetFilter;
		species_every?:inpob_SpeciesFilter;
		species_some?:inpob_SpeciesFilter;
		species_none?:inpob_SpeciesFilter;
		starships_every?:inpob_StarshipFilter;
		starships_some?:inpob_StarshipFilter;
		starships_none?:inpob_StarshipFilter;
		vehicles_every?:inpob_VehicleFilter;
		vehicles_some?:inpob_VehicleFilter;
		vehicles_none?:inpob_VehicleFilter
	};
export type object_PersonSubscriptionPayload = {
	payload:{
		mutation:enum__ModelMutationType;
		node?:query["Person"];
		updatedFields:s_String[];
		previousValues?:object_PersonPreviousValues
	};
};
export type inpob_PersonfilmsFilm = {
		/**
		 * The name of the director of this film.
		*/
		director?:s_String;
		/**
		 * The episode number of this film.
		*/
		episodeId:s_Int;
		/**
		 * indicates if the record is published
		*/
		isPublished?:s_Boolean;
		/**
		 * The opening paragraphs at the beginning of this film.
		*/
		openingCrawl?:s_String;
		/**
		 * The names of the producers of this film.
		*/
		producers:s_String[];
		/**
		 *  The ISO 8601 date format of film release at original creator country.
		*/
		releaseDate?:s_DateTime;
		/**
		 * The title of this film
		*/
		title:s_String;
		charactersIds:s_ID[];
		characters:inpob_FilmcharactersPerson[];
		planetsIds:s_ID[];
		planets:inpob_FilmplanetsPlanet[];
		speciesIds:s_ID[];
		species:inpob_FilmspeciesSpecies[];
		starshipsIds:s_ID[];
		starships:inpob_FilmstarshipsStarship[];
		vehiclesIds:s_ID[];
		vehicles:inpob_FilmvehiclesVehicle[]
	};
export type inpob_PersonhomeworldPlanet = {
		/**
		 * The climate of this planet.
		*/
		climate:s_String[];
		/**
		 * The diameter of this planet in kilometers.
		*/
		diameter?:s_Int;
		/**
		 * A number denoting the gravity of this planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
		*/
		gravity?:s_String;
		/**
		 * indicates if the record is published
		*/
		isPublished?:s_Boolean;
		/**
		 * The name of the planet
		*/
		name:s_String;
		/**
		 * The number of standard days it takes for this planet to complete a single orbit of its local star.
		*/
		orbitalPeriod?:s_Int;
		/**
		 * The average population of sentient beings inhabiting this planet.
		*/
		population?:s_Float;
		/**
		 * The number of standard hours it takes for this planet to complete a single rotation on its axis.
		*/
		rotationPeriod?:s_Int;
		/**
		 * The percentage of the planet surface that is naturally occurring water or bodies of water.
		*/
		surfaceWater?:s_Float;
		/**
		 * The terrain of this planet.
		*/
		terrain:s_String[];
		filmsIds:s_ID[];
		films:inpob_PlanetfilmsFilm[];
		residentsIds:s_ID[];
		residents:inpob_PlanetresidentsPerson[]
	};
export type inpob_PersonspeciesSpecies = {
		/**
		 * The average height of this species in centimeters.
		*/
		averageHeight?:s_Int;
		/**
		 * The average lifespan of this species in years.
		*/
		averageLifespan?:s_Int;
		/**
		 * The classification of this species, such as "mammal" or "reptile".
		*/
		classification?:s_String;
		/**
		 * The designation of this species, such as "sentient".
		*/
		designation?:s_String;
		/**
		 * The eye colors for this species, "UNKNOWN" if not known, null if this species does not typically have eyes.
		*/
		eyeColor:enum_SPECIES_EYE_COLOR[];
		/**
		 * The hair colors for this species, "UNKNOWN" if not known, null if this species does not typically have hairs.
		*/
		hairColor:enum_SPECIES_HAIR_COLOR[];
		/**
		 * indicates if the record is published
		*/
		isPublished?:s_Boolean;
		/**
		 * The language commonly spoken by this species.
		*/
		language?:s_String;
		/**
		 * The name of this species.
		*/
		name:s_String;
		/**
		 * The skin colors for this species, "UNKNOWN" if not known, null if this species does not typically have a skin.
		*/
		skinColor:enum_SPECIES_SKIN_COLOR[];
		filmsIds:s_ID[];
		films:inpob_SpeciesfilmsFilm[];
		peopleIds:s_ID[];
		people:inpob_SpeciespeoplePerson[]
	};
export type inpob_PersonstarshipsStarship = {
		/**
		 * The maximum number of kilograms that this starship can transport.
		*/
		cargoCapacity?:s_Float;
		/**
		 * The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation"
		*/
		class?:s_String;
		/**
		 * The maximum length of time that this starship can provide consumables for its entire crew without having to resupply.
		*/
		consumables?:s_String;
		/**
		 *  The cost of this starship new, in galactic credits.
		*/
		costInCredits?:s_Float;
		/**
		 * The number of personnel needed to run or pilot this starship.
		*/
		crew?:s_Int;
		/**
		 * The class of this starships hyperdrive.
		*/
		hyperdriveRating?:s_Float;
		/**
		 * indicates if the record is published
		*/
		isPublished?:s_Boolean;
		/**
		 * The length of this starship in meters.
		*/
		length?:s_Float;
		/**
		 * The manufacturer of this starship.
		*/
		manufacturer:s_String[];
		/**
		 *  The maximum speed of this starship in the atmosphere. null if this starship is incapable of atmospheric flight.
		*/
		maxAtmospheringSpeed?:s_Int;
		/**
		 * The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe.
		*/
		mglt?:s_Int;
		/**
		 * The name of this starship. The common name, such as "Death Star".
		*/
		name:s_String;
		/**
		 *  The number of non-essential people this starship can transport.
		*/
		passengers?:s_Int;
		filmsIds:s_ID[];
		films:inpob_StarshipfilmsFilm[];
		pilotsIds:s_ID[];
		pilots:inpob_StarshippilotsPerson[]
	};
export type inpob_PersonvehiclesVehicle = {
		/**
		 * The maximum number of kilograms that this vehicle can transport.
		*/
		cargoCapacity?:s_Int;
		/**
		 *  The class of this vehicle, such as "Wheeled" or "Repulsorcraft".
		*/
		class?:s_String;
		/**
		 * The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply.
		*/
		consumables?:s_String;
		/**
		 * The cost of this vehicle new, in Galactic Credits.
		*/
		costInCredits?:s_Int;
		/**
		 * The number of personnel needed to run or pilot this vehicle.
		*/
		crew?:s_Int;
		/**
		 * indicates if the record is published
		*/
		isPublished?:s_Boolean;
		/**
		 *  The length of this vehicle in meters.
		*/
		length?:s_Float;
		/**
		 * The manufacturer of this vehicle.
		*/
		manufacturer:s_String[];
		/**
		 * The maximum speed of this vehicle in the atmosphere.
		*/
		maxAtmospheringSpeed?:s_Int;
		/**
		 * The model or official name of this vehicle. Such as "All-Terrain Attack Transport".
		*/
		model?:s_String;
		/**
		 * The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike".
		*/
		name:s_String;
		/**
		 * The number of non-essential people this vehicle can transport.
		*/
		passengers?:s_Int;
		filmsIds:s_ID[];
		films:inpob_VehiclefilmsFilm[];
		pilotsIds:s_ID[];
		pilots:inpob_VehiclepilotsPerson[]
	};
export type object_PlanetPreviousValues = {
	payload:{
		/**
		 * The climate of this planet.
		*/
		climate:s_String[];
		createdAt:s_DateTime;
		/**
		 * The diameter of this planet in kilometers.
		*/
		diameter?:s_Int;
		/**
		 * A number denoting the gravity of this planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
		*/
		gravity?:s_String;
		id:s_ID;
		/**
		 * indicates if the record is published
		*/
		isPublished:s_Boolean;
		/**
		 * The name of the planet
		*/
		name:s_String;
		/**
		 * The number of standard days it takes for this planet to complete a single orbit of its local star.
		*/
		orbitalPeriod?:s_Int;
		/**
		 * The average population of sentient beings inhabiting this planet.
		*/
		population?:s_Float;
		/**
		 * The number of standard hours it takes for this planet to complete a single rotation on its axis.
		*/
		rotationPeriod?:s_Int;
		/**
		 * The percentage of the planet surface that is naturally occurring water or bodies of water.
		*/
		surfaceWater?:s_Float;
		/**
		 * The terrain of this planet.
		*/
		terrain:s_String[];
		updatedAt:s_DateTime
	};
};
export type inpob_PlanetSubscriptionFilter = {
		/**
		 * Logical AND on all given filters.
		*/
		AND:inpob_PlanetSubscriptionFilter[];
		/**
		 * Logical OR on all given filters.
		*/
		OR:inpob_PlanetSubscriptionFilter[];
		/**
		 * The subscription event gets dispatched when it's listed in mutation_in
		*/
		mutation_in:enum__ModelMutationType[];
		/**
		 * The subscription event gets only dispatched when one of the updated fields names is included in this list
		*/
		updatedFields_contains?:s_String;
		/**
		 * The subscription event gets only dispatched when all of the field names included in this list have been updated
		*/
		updatedFields_contains_every:s_String[];
		/**
		 * The subscription event gets only dispatched when some of the field names included in this list have been updated
		*/
		updatedFields_contains_some:s_String[];
		node?:inpob_PlanetSubscriptionFilterNode
	};
export type inpob_PlanetSubscriptionFilterNode = {
		createdAt?:s_DateTime;
		/**
		 * All values that are not equal to given value.
		*/
		createdAt_not?:s_DateTime;
		/**
		 * All values that are contained in given list.
		*/
		createdAt_in:s_DateTime[];
		/**
		 * All values that are not contained in given list.
		*/
		createdAt_not_in:s_DateTime[];
		/**
		 * All values less than the given value.
		*/
		createdAt_lt?:s_DateTime;
		/**
		 * All values less than or equal the given value.
		*/
		createdAt_lte?:s_DateTime;
		/**
		 * All values greater than the given value.
		*/
		createdAt_gt?:s_DateTime;
		/**
		 * All values greater than or equal the given value.
		*/
		createdAt_gte?:s_DateTime;
		diameter?:s_Int;
		/**
		 * All values that are not equal to given value.
		*/
		diameter_not?:s_Int;
		/**
		 * All values that are contained in given list.
		*/
		diameter_in:s_Int[];
		/**
		 * All values that are not contained in given list.
		*/
		diameter_not_in:s_Int[];
		/**
		 * All values less than the given value.
		*/
		diameter_lt?:s_Int;
		/**
		 * All values less than or equal the given value.
		*/
		diameter_lte?:s_Int;
		/**
		 * All values greater than the given value.
		*/
		diameter_gt?:s_Int;
		/**
		 * All values greater than or equal the given value.
		*/
		diameter_gte?:s_Int;
		gravity?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		gravity_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		gravity_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		gravity_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		gravity_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		gravity_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		gravity_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		gravity_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		gravity_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		gravity_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		gravity_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		gravity_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		gravity_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		gravity_not_ends_with?:s_String;
		id?:s_ID;
		/**
		 * All values that are not equal to given value.
		*/
		id_not?:s_ID;
		/**
		 * All values that are contained in given list.
		*/
		id_in:s_ID[];
		/**
		 * All values that are not contained in given list.
		*/
		id_not_in:s_ID[];
		/**
		 * All values less than the given value.
		*/
		id_lt?:s_ID;
		/**
		 * All values less than or equal the given value.
		*/
		id_lte?:s_ID;
		/**
		 * All values greater than the given value.
		*/
		id_gt?:s_ID;
		/**
		 * All values greater than or equal the given value.
		*/
		id_gte?:s_ID;
		/**
		 * All values containing the given string.
		*/
		id_contains?:s_ID;
		/**
		 * All values not containing the given string.
		*/
		id_not_contains?:s_ID;
		/**
		 * All values starting with the given string.
		*/
		id_starts_with?:s_ID;
		/**
		 * All values not starting with the given string.
		*/
		id_not_starts_with?:s_ID;
		/**
		 * All values ending with the given string.
		*/
		id_ends_with?:s_ID;
		/**
		 * All values not ending with the given string.
		*/
		id_not_ends_with?:s_ID;
		isPublished?:s_Boolean;
		/**
		 * All values that are not equal to given value.
		*/
		isPublished_not?:s_Boolean;
		name?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		name_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		name_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		name_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		name_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		name_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		name_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		name_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		name_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		name_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		name_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		name_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		name_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		name_not_ends_with?:s_String;
		orbitalPeriod?:s_Int;
		/**
		 * All values that are not equal to given value.
		*/
		orbitalPeriod_not?:s_Int;
		/**
		 * All values that are contained in given list.
		*/
		orbitalPeriod_in:s_Int[];
		/**
		 * All values that are not contained in given list.
		*/
		orbitalPeriod_not_in:s_Int[];
		/**
		 * All values less than the given value.
		*/
		orbitalPeriod_lt?:s_Int;
		/**
		 * All values less than or equal the given value.
		*/
		orbitalPeriod_lte?:s_Int;
		/**
		 * All values greater than the given value.
		*/
		orbitalPeriod_gt?:s_Int;
		/**
		 * All values greater than or equal the given value.
		*/
		orbitalPeriod_gte?:s_Int;
		population?:s_Float;
		/**
		 * All values that are not equal to given value.
		*/
		population_not?:s_Float;
		/**
		 * All values that are contained in given list.
		*/
		population_in:s_Float[];
		/**
		 * All values that are not contained in given list.
		*/
		population_not_in:s_Float[];
		/**
		 * All values less than the given value.
		*/
		population_lt?:s_Float;
		/**
		 * All values less than or equal the given value.
		*/
		population_lte?:s_Float;
		/**
		 * All values greater than the given value.
		*/
		population_gt?:s_Float;
		/**
		 * All values greater than or equal the given value.
		*/
		population_gte?:s_Float;
		rotationPeriod?:s_Int;
		/**
		 * All values that are not equal to given value.
		*/
		rotationPeriod_not?:s_Int;
		/**
		 * All values that are contained in given list.
		*/
		rotationPeriod_in:s_Int[];
		/**
		 * All values that are not contained in given list.
		*/
		rotationPeriod_not_in:s_Int[];
		/**
		 * All values less than the given value.
		*/
		rotationPeriod_lt?:s_Int;
		/**
		 * All values less than or equal the given value.
		*/
		rotationPeriod_lte?:s_Int;
		/**
		 * All values greater than the given value.
		*/
		rotationPeriod_gt?:s_Int;
		/**
		 * All values greater than or equal the given value.
		*/
		rotationPeriod_gte?:s_Int;
		surfaceWater?:s_Float;
		/**
		 * All values that are not equal to given value.
		*/
		surfaceWater_not?:s_Float;
		/**
		 * All values that are contained in given list.
		*/
		surfaceWater_in:s_Float[];
		/**
		 * All values that are not contained in given list.
		*/
		surfaceWater_not_in:s_Float[];
		/**
		 * All values less than the given value.
		*/
		surfaceWater_lt?:s_Float;
		/**
		 * All values less than or equal the given value.
		*/
		surfaceWater_lte?:s_Float;
		/**
		 * All values greater than the given value.
		*/
		surfaceWater_gt?:s_Float;
		/**
		 * All values greater than or equal the given value.
		*/
		surfaceWater_gte?:s_Float;
		updatedAt?:s_DateTime;
		/**
		 * All values that are not equal to given value.
		*/
		updatedAt_not?:s_DateTime;
		/**
		 * All values that are contained in given list.
		*/
		updatedAt_in:s_DateTime[];
		/**
		 * All values that are not contained in given list.
		*/
		updatedAt_not_in:s_DateTime[];
		/**
		 * All values less than the given value.
		*/
		updatedAt_lt?:s_DateTime;
		/**
		 * All values less than or equal the given value.
		*/
		updatedAt_lte?:s_DateTime;
		/**
		 * All values greater than the given value.
		*/
		updatedAt_gt?:s_DateTime;
		/**
		 * All values greater than or equal the given value.
		*/
		updatedAt_gte?:s_DateTime;
		films_every?:inpob_FilmFilter;
		films_some?:inpob_FilmFilter;
		films_none?:inpob_FilmFilter;
		residents_every?:inpob_PersonFilter;
		residents_some?:inpob_PersonFilter;
		residents_none?:inpob_PersonFilter
	};
export type object_PlanetSubscriptionPayload = {
	payload:{
		mutation:enum__ModelMutationType;
		node?:query["Planet"];
		updatedFields:s_String[];
		previousValues?:object_PlanetPreviousValues
	};
};
export type inpob_PlanetfilmsFilm = {
		/**
		 * The name of the director of this film.
		*/
		director?:s_String;
		/**
		 * The episode number of this film.
		*/
		episodeId:s_Int;
		/**
		 * indicates if the record is published
		*/
		isPublished?:s_Boolean;
		/**
		 * The opening paragraphs at the beginning of this film.
		*/
		openingCrawl?:s_String;
		/**
		 * The names of the producers of this film.
		*/
		producers:s_String[];
		/**
		 *  The ISO 8601 date format of film release at original creator country.
		*/
		releaseDate?:s_DateTime;
		/**
		 * The title of this film
		*/
		title:s_String;
		charactersIds:s_ID[];
		characters:inpob_FilmcharactersPerson[];
		planetsIds:s_ID[];
		planets:inpob_FilmplanetsPlanet[];
		speciesIds:s_ID[];
		species:inpob_FilmspeciesSpecies[];
		starshipsIds:s_ID[];
		starships:inpob_FilmstarshipsStarship[];
		vehiclesIds:s_ID[];
		vehicles:inpob_FilmvehiclesVehicle[]
	};
export type inpob_PlanetresidentsPerson = {
		/**
		 * The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.
		*/
		birthYear?:s_String;
		/**
		 * The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye.
		*/
		eyeColor:enum_PERSON_EYE_COLOR[];
		/**
		 *  The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender.
		*/
		gender?:enum_PERSON_GENDER;
		/**
		 * The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair.
		*/
		hairColor:enum_PERSON_HAIR_COLOR[];
		/**
		 * The height of the person in centimeters.
		*/
		height?:s_Int;
		/**
		 * indicates if the record is published
		*/
		isPublished?:s_Boolean;
		/**
		 * The mass of the person in kilograms.
		*/
		mass?:s_Float;
		/**
		 * The name of this person.
		*/
		name:s_String;
		/**
		 * The skin color of this person.
		*/
		skinColor:enum_PERSON_SKIN_COLOR[];
		filmsIds:s_ID[];
		films:inpob_PersonfilmsFilm[];
		speciesIds:s_ID[];
		species:inpob_PersonspeciesSpecies[];
		starshipsIds:s_ID[];
		starships:inpob_PersonstarshipsStarship[];
		vehiclesIds:s_ID[];
		vehicles:inpob_PersonvehiclesVehicle[]
	};
export type object_RemoveFromFilmPlanetsPayload = {
	payload:{
		filmsFilm?:query["Film"];
		planetsPlanet?:query["Planet"]
	};
};
export type object_RemoveFromFilmSpeciesPayload = {
	payload:{
		filmsFilm?:query["Film"];
		speciesSpecies?:query["Species"]
	};
};
export type object_RemoveFromFilmStarshipsPayload = {
	payload:{
		filmsFilm?:query["Film"];
		starshipsStarship?:query["Starship"]
	};
};
export type object_RemoveFromFilmVehiclesPayload = {
	payload:{
		filmsFilm?:query["Film"];
		vehiclesVehicle?:query["Vehicle"]
	};
};
export type object_RemoveFromPeopleFilmPayload = {
	payload:{
		charactersPerson?:query["Person"];
		filmsFilm?:query["Film"]
	};
};
export type object_RemoveFromPeoplePlanetPayload = {
	payload:{
		residentsPerson?:query["Person"];
		homeworldPlanet?:query["Planet"]
	};
};
export type object_RemoveFromPeopleSpeciesPayload = {
	payload:{
		peoplePerson?:query["Person"];
		speciesSpecies?:query["Species"]
	};
};
export type object_RemoveFromPeopleStarshipsPayload = {
	payload:{
		pilotsPerson?:query["Person"];
		starshipsStarship?:query["Starship"]
	};
};
export type object_RemoveFromPeopleVehiclesPayload = {
	payload:{
		pilotsPerson?:query["Person"];
		vehiclesVehicle?:query["Vehicle"]
	};
};
export type object_SpeciesPreviousValues = {
	payload:{
		/**
		 * The average height of this species in centimeters.
		*/
		averageHeight?:s_Int;
		/**
		 * The average lifespan of this species in years.
		*/
		averageLifespan?:s_Int;
		/**
		 * The classification of this species, such as "mammal" or "reptile".
		*/
		classification?:s_String;
		createdAt:s_DateTime;
		/**
		 * The designation of this species, such as "sentient".
		*/
		designation?:s_String;
		/**
		 * The eye colors for this species, "UNKNOWN" if not known, null if this species does not typically have eyes.
		*/
		eyeColor:enum_SPECIES_EYE_COLOR[];
		/**
		 * The hair colors for this species, "UNKNOWN" if not known, null if this species does not typically have hairs.
		*/
		hairColor:enum_SPECIES_HAIR_COLOR[];
		id:s_ID;
		/**
		 * indicates if the record is published
		*/
		isPublished:s_Boolean;
		/**
		 * The language commonly spoken by this species.
		*/
		language?:s_String;
		/**
		 * The name of this species.
		*/
		name:s_String;
		/**
		 * The skin colors for this species, "UNKNOWN" if not known, null if this species does not typically have a skin.
		*/
		skinColor:enum_SPECIES_SKIN_COLOR[];
		updatedAt:s_DateTime
	};
};
export type inpob_SpeciesSubscriptionFilter = {
		/**
		 * Logical AND on all given filters.
		*/
		AND:inpob_SpeciesSubscriptionFilter[];
		/**
		 * Logical OR on all given filters.
		*/
		OR:inpob_SpeciesSubscriptionFilter[];
		/**
		 * The subscription event gets dispatched when it's listed in mutation_in
		*/
		mutation_in:enum__ModelMutationType[];
		/**
		 * The subscription event gets only dispatched when one of the updated fields names is included in this list
		*/
		updatedFields_contains?:s_String;
		/**
		 * The subscription event gets only dispatched when all of the field names included in this list have been updated
		*/
		updatedFields_contains_every:s_String[];
		/**
		 * The subscription event gets only dispatched when some of the field names included in this list have been updated
		*/
		updatedFields_contains_some:s_String[];
		node?:inpob_SpeciesSubscriptionFilterNode
	};
export type inpob_SpeciesSubscriptionFilterNode = {
		averageHeight?:s_Int;
		/**
		 * All values that are not equal to given value.
		*/
		averageHeight_not?:s_Int;
		/**
		 * All values that are contained in given list.
		*/
		averageHeight_in:s_Int[];
		/**
		 * All values that are not contained in given list.
		*/
		averageHeight_not_in:s_Int[];
		/**
		 * All values less than the given value.
		*/
		averageHeight_lt?:s_Int;
		/**
		 * All values less than or equal the given value.
		*/
		averageHeight_lte?:s_Int;
		/**
		 * All values greater than the given value.
		*/
		averageHeight_gt?:s_Int;
		/**
		 * All values greater than or equal the given value.
		*/
		averageHeight_gte?:s_Int;
		averageLifespan?:s_Int;
		/**
		 * All values that are not equal to given value.
		*/
		averageLifespan_not?:s_Int;
		/**
		 * All values that are contained in given list.
		*/
		averageLifespan_in:s_Int[];
		/**
		 * All values that are not contained in given list.
		*/
		averageLifespan_not_in:s_Int[];
		/**
		 * All values less than the given value.
		*/
		averageLifespan_lt?:s_Int;
		/**
		 * All values less than or equal the given value.
		*/
		averageLifespan_lte?:s_Int;
		/**
		 * All values greater than the given value.
		*/
		averageLifespan_gt?:s_Int;
		/**
		 * All values greater than or equal the given value.
		*/
		averageLifespan_gte?:s_Int;
		classification?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		classification_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		classification_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		classification_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		classification_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		classification_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		classification_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		classification_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		classification_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		classification_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		classification_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		classification_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		classification_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		classification_not_ends_with?:s_String;
		createdAt?:s_DateTime;
		/**
		 * All values that are not equal to given value.
		*/
		createdAt_not?:s_DateTime;
		/**
		 * All values that are contained in given list.
		*/
		createdAt_in:s_DateTime[];
		/**
		 * All values that are not contained in given list.
		*/
		createdAt_not_in:s_DateTime[];
		/**
		 * All values less than the given value.
		*/
		createdAt_lt?:s_DateTime;
		/**
		 * All values less than or equal the given value.
		*/
		createdAt_lte?:s_DateTime;
		/**
		 * All values greater than the given value.
		*/
		createdAt_gt?:s_DateTime;
		/**
		 * All values greater than or equal the given value.
		*/
		createdAt_gte?:s_DateTime;
		designation?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		designation_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		designation_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		designation_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		designation_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		designation_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		designation_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		designation_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		designation_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		designation_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		designation_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		designation_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		designation_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		designation_not_ends_with?:s_String;
		id?:s_ID;
		/**
		 * All values that are not equal to given value.
		*/
		id_not?:s_ID;
		/**
		 * All values that are contained in given list.
		*/
		id_in:s_ID[];
		/**
		 * All values that are not contained in given list.
		*/
		id_not_in:s_ID[];
		/**
		 * All values less than the given value.
		*/
		id_lt?:s_ID;
		/**
		 * All values less than or equal the given value.
		*/
		id_lte?:s_ID;
		/**
		 * All values greater than the given value.
		*/
		id_gt?:s_ID;
		/**
		 * All values greater than or equal the given value.
		*/
		id_gte?:s_ID;
		/**
		 * All values containing the given string.
		*/
		id_contains?:s_ID;
		/**
		 * All values not containing the given string.
		*/
		id_not_contains?:s_ID;
		/**
		 * All values starting with the given string.
		*/
		id_starts_with?:s_ID;
		/**
		 * All values not starting with the given string.
		*/
		id_not_starts_with?:s_ID;
		/**
		 * All values ending with the given string.
		*/
		id_ends_with?:s_ID;
		/**
		 * All values not ending with the given string.
		*/
		id_not_ends_with?:s_ID;
		isPublished?:s_Boolean;
		/**
		 * All values that are not equal to given value.
		*/
		isPublished_not?:s_Boolean;
		language?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		language_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		language_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		language_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		language_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		language_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		language_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		language_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		language_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		language_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		language_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		language_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		language_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		language_not_ends_with?:s_String;
		name?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		name_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		name_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		name_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		name_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		name_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		name_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		name_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		name_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		name_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		name_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		name_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		name_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		name_not_ends_with?:s_String;
		updatedAt?:s_DateTime;
		/**
		 * All values that are not equal to given value.
		*/
		updatedAt_not?:s_DateTime;
		/**
		 * All values that are contained in given list.
		*/
		updatedAt_in:s_DateTime[];
		/**
		 * All values that are not contained in given list.
		*/
		updatedAt_not_in:s_DateTime[];
		/**
		 * All values less than the given value.
		*/
		updatedAt_lt?:s_DateTime;
		/**
		 * All values less than or equal the given value.
		*/
		updatedAt_lte?:s_DateTime;
		/**
		 * All values greater than the given value.
		*/
		updatedAt_gt?:s_DateTime;
		/**
		 * All values greater than or equal the given value.
		*/
		updatedAt_gte?:s_DateTime;
		films_every?:inpob_FilmFilter;
		films_some?:inpob_FilmFilter;
		films_none?:inpob_FilmFilter;
		people_every?:inpob_PersonFilter;
		people_some?:inpob_PersonFilter;
		people_none?:inpob_PersonFilter
	};
export type object_SpeciesSubscriptionPayload = {
	payload:{
		mutation:enum__ModelMutationType;
		node?:query["Species"];
		updatedFields:s_String[];
		previousValues?:object_SpeciesPreviousValues
	};
};
export type inpob_SpeciesfilmsFilm = {
		/**
		 * The name of the director of this film.
		*/
		director?:s_String;
		/**
		 * The episode number of this film.
		*/
		episodeId:s_Int;
		/**
		 * indicates if the record is published
		*/
		isPublished?:s_Boolean;
		/**
		 * The opening paragraphs at the beginning of this film.
		*/
		openingCrawl?:s_String;
		/**
		 * The names of the producers of this film.
		*/
		producers:s_String[];
		/**
		 *  The ISO 8601 date format of film release at original creator country.
		*/
		releaseDate?:s_DateTime;
		/**
		 * The title of this film
		*/
		title:s_String;
		charactersIds:s_ID[];
		characters:inpob_FilmcharactersPerson[];
		planetsIds:s_ID[];
		planets:inpob_FilmplanetsPlanet[];
		speciesIds:s_ID[];
		species:inpob_FilmspeciesSpecies[];
		starshipsIds:s_ID[];
		starships:inpob_FilmstarshipsStarship[];
		vehiclesIds:s_ID[];
		vehicles:inpob_FilmvehiclesVehicle[]
	};
export type inpob_SpeciespeoplePerson = {
		/**
		 * The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.
		*/
		birthYear?:s_String;
		/**
		 * The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye.
		*/
		eyeColor:enum_PERSON_EYE_COLOR[];
		/**
		 *  The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender.
		*/
		gender?:enum_PERSON_GENDER;
		/**
		 * The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair.
		*/
		hairColor:enum_PERSON_HAIR_COLOR[];
		/**
		 * The height of the person in centimeters.
		*/
		height?:s_Int;
		/**
		 * indicates if the record is published
		*/
		isPublished?:s_Boolean;
		/**
		 * The mass of the person in kilograms.
		*/
		mass?:s_Float;
		/**
		 * The name of this person.
		*/
		name:s_String;
		/**
		 * The skin color of this person.
		*/
		skinColor:enum_PERSON_SKIN_COLOR[];
		homeworldId?:s_ID;
		homeworld?:inpob_PersonhomeworldPlanet;
		filmsIds:s_ID[];
		films:inpob_PersonfilmsFilm[];
		speciesIds:s_ID[];
		species:inpob_PersonspeciesSpecies[];
		starshipsIds:s_ID[];
		starships:inpob_PersonstarshipsStarship[];
		vehiclesIds:s_ID[];
		vehicles:inpob_PersonvehiclesVehicle[]
	};
export type object_StarshipPreviousValues = {
	payload:{
		/**
		 * The maximum number of kilograms that this starship can transport.
		*/
		cargoCapacity?:s_Float;
		/**
		 * The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation"
		*/
		class?:s_String;
		/**
		 * The maximum length of time that this starship can provide consumables for its entire crew without having to resupply.
		*/
		consumables?:s_String;
		/**
		 *  The cost of this starship new, in galactic credits.
		*/
		costInCredits?:s_Float;
		createdAt:s_DateTime;
		/**
		 * The number of personnel needed to run or pilot this starship.
		*/
		crew?:s_Int;
		/**
		 * The class of this starships hyperdrive.
		*/
		hyperdriveRating?:s_Float;
		id:s_ID;
		/**
		 * indicates if the record is published
		*/
		isPublished:s_Boolean;
		/**
		 * The length of this starship in meters.
		*/
		length?:s_Float;
		/**
		 * The manufacturer of this starship.
		*/
		manufacturer:s_String[];
		/**
		 *  The maximum speed of this starship in the atmosphere. null if this starship is incapable of atmospheric flight.
		*/
		maxAtmospheringSpeed?:s_Int;
		/**
		 * The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe.
		*/
		mglt?:s_Int;
		/**
		 * The name of this starship. The common name, such as "Death Star".
		*/
		name:s_String;
		/**
		 *  The number of non-essential people this starship can transport.
		*/
		passengers?:s_Int;
		updatedAt:s_DateTime
	};
};
export type inpob_StarshipSubscriptionFilter = {
		/**
		 * Logical AND on all given filters.
		*/
		AND:inpob_StarshipSubscriptionFilter[];
		/**
		 * Logical OR on all given filters.
		*/
		OR:inpob_StarshipSubscriptionFilter[];
		/**
		 * The subscription event gets dispatched when it's listed in mutation_in
		*/
		mutation_in:enum__ModelMutationType[];
		/**
		 * The subscription event gets only dispatched when one of the updated fields names is included in this list
		*/
		updatedFields_contains?:s_String;
		/**
		 * The subscription event gets only dispatched when all of the field names included in this list have been updated
		*/
		updatedFields_contains_every:s_String[];
		/**
		 * The subscription event gets only dispatched when some of the field names included in this list have been updated
		*/
		updatedFields_contains_some:s_String[];
		node?:inpob_StarshipSubscriptionFilterNode
	};
export type inpob_StarshipSubscriptionFilterNode = {
		cargoCapacity?:s_Float;
		/**
		 * All values that are not equal to given value.
		*/
		cargoCapacity_not?:s_Float;
		/**
		 * All values that are contained in given list.
		*/
		cargoCapacity_in:s_Float[];
		/**
		 * All values that are not contained in given list.
		*/
		cargoCapacity_not_in:s_Float[];
		/**
		 * All values less than the given value.
		*/
		cargoCapacity_lt?:s_Float;
		/**
		 * All values less than or equal the given value.
		*/
		cargoCapacity_lte?:s_Float;
		/**
		 * All values greater than the given value.
		*/
		cargoCapacity_gt?:s_Float;
		/**
		 * All values greater than or equal the given value.
		*/
		cargoCapacity_gte?:s_Float;
		class?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		class_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		class_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		class_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		class_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		class_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		class_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		class_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		class_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		class_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		class_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		class_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		class_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		class_not_ends_with?:s_String;
		consumables?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		consumables_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		consumables_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		consumables_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		consumables_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		consumables_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		consumables_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		consumables_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		consumables_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		consumables_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		consumables_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		consumables_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		consumables_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		consumables_not_ends_with?:s_String;
		costInCredits?:s_Float;
		/**
		 * All values that are not equal to given value.
		*/
		costInCredits_not?:s_Float;
		/**
		 * All values that are contained in given list.
		*/
		costInCredits_in:s_Float[];
		/**
		 * All values that are not contained in given list.
		*/
		costInCredits_not_in:s_Float[];
		/**
		 * All values less than the given value.
		*/
		costInCredits_lt?:s_Float;
		/**
		 * All values less than or equal the given value.
		*/
		costInCredits_lte?:s_Float;
		/**
		 * All values greater than the given value.
		*/
		costInCredits_gt?:s_Float;
		/**
		 * All values greater than or equal the given value.
		*/
		costInCredits_gte?:s_Float;
		createdAt?:s_DateTime;
		/**
		 * All values that are not equal to given value.
		*/
		createdAt_not?:s_DateTime;
		/**
		 * All values that are contained in given list.
		*/
		createdAt_in:s_DateTime[];
		/**
		 * All values that are not contained in given list.
		*/
		createdAt_not_in:s_DateTime[];
		/**
		 * All values less than the given value.
		*/
		createdAt_lt?:s_DateTime;
		/**
		 * All values less than or equal the given value.
		*/
		createdAt_lte?:s_DateTime;
		/**
		 * All values greater than the given value.
		*/
		createdAt_gt?:s_DateTime;
		/**
		 * All values greater than or equal the given value.
		*/
		createdAt_gte?:s_DateTime;
		crew?:s_Int;
		/**
		 * All values that are not equal to given value.
		*/
		crew_not?:s_Int;
		/**
		 * All values that are contained in given list.
		*/
		crew_in:s_Int[];
		/**
		 * All values that are not contained in given list.
		*/
		crew_not_in:s_Int[];
		/**
		 * All values less than the given value.
		*/
		crew_lt?:s_Int;
		/**
		 * All values less than or equal the given value.
		*/
		crew_lte?:s_Int;
		/**
		 * All values greater than the given value.
		*/
		crew_gt?:s_Int;
		/**
		 * All values greater than or equal the given value.
		*/
		crew_gte?:s_Int;
		hyperdriveRating?:s_Float;
		/**
		 * All values that are not equal to given value.
		*/
		hyperdriveRating_not?:s_Float;
		/**
		 * All values that are contained in given list.
		*/
		hyperdriveRating_in:s_Float[];
		/**
		 * All values that are not contained in given list.
		*/
		hyperdriveRating_not_in:s_Float[];
		/**
		 * All values less than the given value.
		*/
		hyperdriveRating_lt?:s_Float;
		/**
		 * All values less than or equal the given value.
		*/
		hyperdriveRating_lte?:s_Float;
		/**
		 * All values greater than the given value.
		*/
		hyperdriveRating_gt?:s_Float;
		/**
		 * All values greater than or equal the given value.
		*/
		hyperdriveRating_gte?:s_Float;
		id?:s_ID;
		/**
		 * All values that are not equal to given value.
		*/
		id_not?:s_ID;
		/**
		 * All values that are contained in given list.
		*/
		id_in:s_ID[];
		/**
		 * All values that are not contained in given list.
		*/
		id_not_in:s_ID[];
		/**
		 * All values less than the given value.
		*/
		id_lt?:s_ID;
		/**
		 * All values less than or equal the given value.
		*/
		id_lte?:s_ID;
		/**
		 * All values greater than the given value.
		*/
		id_gt?:s_ID;
		/**
		 * All values greater than or equal the given value.
		*/
		id_gte?:s_ID;
		/**
		 * All values containing the given string.
		*/
		id_contains?:s_ID;
		/**
		 * All values not containing the given string.
		*/
		id_not_contains?:s_ID;
		/**
		 * All values starting with the given string.
		*/
		id_starts_with?:s_ID;
		/**
		 * All values not starting with the given string.
		*/
		id_not_starts_with?:s_ID;
		/**
		 * All values ending with the given string.
		*/
		id_ends_with?:s_ID;
		/**
		 * All values not ending with the given string.
		*/
		id_not_ends_with?:s_ID;
		isPublished?:s_Boolean;
		/**
		 * All values that are not equal to given value.
		*/
		isPublished_not?:s_Boolean;
		length?:s_Float;
		/**
		 * All values that are not equal to given value.
		*/
		length_not?:s_Float;
		/**
		 * All values that are contained in given list.
		*/
		length_in:s_Float[];
		/**
		 * All values that are not contained in given list.
		*/
		length_not_in:s_Float[];
		/**
		 * All values less than the given value.
		*/
		length_lt?:s_Float;
		/**
		 * All values less than or equal the given value.
		*/
		length_lte?:s_Float;
		/**
		 * All values greater than the given value.
		*/
		length_gt?:s_Float;
		/**
		 * All values greater than or equal the given value.
		*/
		length_gte?:s_Float;
		maxAtmospheringSpeed?:s_Int;
		/**
		 * All values that are not equal to given value.
		*/
		maxAtmospheringSpeed_not?:s_Int;
		/**
		 * All values that are contained in given list.
		*/
		maxAtmospheringSpeed_in:s_Int[];
		/**
		 * All values that are not contained in given list.
		*/
		maxAtmospheringSpeed_not_in:s_Int[];
		/**
		 * All values less than the given value.
		*/
		maxAtmospheringSpeed_lt?:s_Int;
		/**
		 * All values less than or equal the given value.
		*/
		maxAtmospheringSpeed_lte?:s_Int;
		/**
		 * All values greater than the given value.
		*/
		maxAtmospheringSpeed_gt?:s_Int;
		/**
		 * All values greater than or equal the given value.
		*/
		maxAtmospheringSpeed_gte?:s_Int;
		mglt?:s_Int;
		/**
		 * All values that are not equal to given value.
		*/
		mglt_not?:s_Int;
		/**
		 * All values that are contained in given list.
		*/
		mglt_in:s_Int[];
		/**
		 * All values that are not contained in given list.
		*/
		mglt_not_in:s_Int[];
		/**
		 * All values less than the given value.
		*/
		mglt_lt?:s_Int;
		/**
		 * All values less than or equal the given value.
		*/
		mglt_lte?:s_Int;
		/**
		 * All values greater than the given value.
		*/
		mglt_gt?:s_Int;
		/**
		 * All values greater than or equal the given value.
		*/
		mglt_gte?:s_Int;
		name?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		name_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		name_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		name_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		name_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		name_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		name_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		name_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		name_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		name_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		name_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		name_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		name_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		name_not_ends_with?:s_String;
		passengers?:s_Int;
		/**
		 * All values that are not equal to given value.
		*/
		passengers_not?:s_Int;
		/**
		 * All values that are contained in given list.
		*/
		passengers_in:s_Int[];
		/**
		 * All values that are not contained in given list.
		*/
		passengers_not_in:s_Int[];
		/**
		 * All values less than the given value.
		*/
		passengers_lt?:s_Int;
		/**
		 * All values less than or equal the given value.
		*/
		passengers_lte?:s_Int;
		/**
		 * All values greater than the given value.
		*/
		passengers_gt?:s_Int;
		/**
		 * All values greater than or equal the given value.
		*/
		passengers_gte?:s_Int;
		updatedAt?:s_DateTime;
		/**
		 * All values that are not equal to given value.
		*/
		updatedAt_not?:s_DateTime;
		/**
		 * All values that are contained in given list.
		*/
		updatedAt_in:s_DateTime[];
		/**
		 * All values that are not contained in given list.
		*/
		updatedAt_not_in:s_DateTime[];
		/**
		 * All values less than the given value.
		*/
		updatedAt_lt?:s_DateTime;
		/**
		 * All values less than or equal the given value.
		*/
		updatedAt_lte?:s_DateTime;
		/**
		 * All values greater than the given value.
		*/
		updatedAt_gt?:s_DateTime;
		/**
		 * All values greater than or equal the given value.
		*/
		updatedAt_gte?:s_DateTime;
		films_every?:inpob_FilmFilter;
		films_some?:inpob_FilmFilter;
		films_none?:inpob_FilmFilter;
		pilots_every?:inpob_PersonFilter;
		pilots_some?:inpob_PersonFilter;
		pilots_none?:inpob_PersonFilter
	};
export type object_StarshipSubscriptionPayload = {
	payload:{
		mutation:enum__ModelMutationType;
		node?:query["Starship"];
		updatedFields:s_String[];
		previousValues?:object_StarshipPreviousValues
	};
};
export type inpob_StarshipfilmsFilm = {
		/**
		 * The name of the director of this film.
		*/
		director?:s_String;
		/**
		 * The episode number of this film.
		*/
		episodeId:s_Int;
		/**
		 * indicates if the record is published
		*/
		isPublished?:s_Boolean;
		/**
		 * The opening paragraphs at the beginning of this film.
		*/
		openingCrawl?:s_String;
		/**
		 * The names of the producers of this film.
		*/
		producers:s_String[];
		/**
		 *  The ISO 8601 date format of film release at original creator country.
		*/
		releaseDate?:s_DateTime;
		/**
		 * The title of this film
		*/
		title:s_String;
		charactersIds:s_ID[];
		characters:inpob_FilmcharactersPerson[];
		planetsIds:s_ID[];
		planets:inpob_FilmplanetsPlanet[];
		speciesIds:s_ID[];
		species:inpob_FilmspeciesSpecies[];
		starshipsIds:s_ID[];
		starships:inpob_FilmstarshipsStarship[];
		vehiclesIds:s_ID[];
		vehicles:inpob_FilmvehiclesVehicle[]
	};
export type inpob_StarshippilotsPerson = {
		/**
		 * The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.
		*/
		birthYear?:s_String;
		/**
		 * The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye.
		*/
		eyeColor:enum_PERSON_EYE_COLOR[];
		/**
		 *  The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender.
		*/
		gender?:enum_PERSON_GENDER;
		/**
		 * The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair.
		*/
		hairColor:enum_PERSON_HAIR_COLOR[];
		/**
		 * The height of the person in centimeters.
		*/
		height?:s_Int;
		/**
		 * indicates if the record is published
		*/
		isPublished?:s_Boolean;
		/**
		 * The mass of the person in kilograms.
		*/
		mass?:s_Float;
		/**
		 * The name of this person.
		*/
		name:s_String;
		/**
		 * The skin color of this person.
		*/
		skinColor:enum_PERSON_SKIN_COLOR[];
		homeworldId?:s_ID;
		homeworld?:inpob_PersonhomeworldPlanet;
		filmsIds:s_ID[];
		films:inpob_PersonfilmsFilm[];
		speciesIds:s_ID[];
		species:inpob_PersonspeciesSpecies[];
		starshipsIds:s_ID[];
		starships:inpob_PersonstarshipsStarship[];
		vehiclesIds:s_ID[];
		vehicles:inpob_PersonvehiclesVehicle[]
	};
export type inpob_UpdateAsset = {
		/**
		 * Original File Name
		*/
		fileName?:s_String;
		/**
		 * The File Handle
		*/
		handle?:s_String;
		/**
		 * The height of the file in case it is an image
		*/
		height?:s_Float;
		id:s_ID;
		/**
		 * The Mime Type
		*/
		mimeType?:s_String;
		/**
		 * The Size Of The File
		*/
		size?:s_Float;
		/**
		 * The Url Of The Asset
		*/
		url?:s_String;
		/**
		 * The width of the file in case it is an image
		*/
		width?:s_Float
	};
export type inpob_UpdateFilm = {
		/**
		 * The name of the director of this film.
		*/
		director?:s_String;
		/**
		 * The episode number of this film.
		*/
		episodeId?:s_Int;
		id:s_ID;
		/**
		 * indicates if the record is published
		*/
		isPublished?:s_Boolean;
		/**
		 * The opening paragraphs at the beginning of this film.
		*/
		openingCrawl?:s_String;
		/**
		 * The names of the producers of this film.
		*/
		producers:s_String[];
		/**
		 *  The ISO 8601 date format of film release at original creator country.
		*/
		releaseDate?:s_DateTime;
		/**
		 * The title of this film
		*/
		title?:s_String;
		charactersIds:s_ID[];
		characters:inpob_FilmcharactersPerson[];
		planetsIds:s_ID[];
		planets:inpob_FilmplanetsPlanet[];
		speciesIds:s_ID[];
		species:inpob_FilmspeciesSpecies[];
		starshipsIds:s_ID[];
		starships:inpob_FilmstarshipsStarship[];
		vehiclesIds:s_ID[];
		vehicles:inpob_FilmvehiclesVehicle[]
	};
export type inpob_UpdatePerson = {
		/**
		 * The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.
		*/
		birthYear?:s_String;
		/**
		 * The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye.
		*/
		eyeColor:enum_PERSON_EYE_COLOR[];
		/**
		 *  The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender.
		*/
		gender?:enum_PERSON_GENDER;
		/**
		 * The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair.
		*/
		hairColor:enum_PERSON_HAIR_COLOR[];
		/**
		 * The height of the person in centimeters.
		*/
		height?:s_Int;
		id:s_ID;
		/**
		 * indicates if the record is published
		*/
		isPublished?:s_Boolean;
		/**
		 * The mass of the person in kilograms.
		*/
		mass?:s_Float;
		/**
		 * The name of this person.
		*/
		name?:s_String;
		/**
		 * The skin color of this person.
		*/
		skinColor:enum_PERSON_SKIN_COLOR[];
		homeworldId?:s_ID;
		homeworld?:inpob_PersonhomeworldPlanet;
		filmsIds:s_ID[];
		films:inpob_PersonfilmsFilm[];
		speciesIds:s_ID[];
		species:inpob_PersonspeciesSpecies[];
		starshipsIds:s_ID[];
		starships:inpob_PersonstarshipsStarship[];
		vehiclesIds:s_ID[];
		vehicles:inpob_PersonvehiclesVehicle[]
	};
export type inpob_UpdatePlanet = {
		/**
		 * The climate of this planet.
		*/
		climate:s_String[];
		/**
		 * The diameter of this planet in kilometers.
		*/
		diameter?:s_Int;
		/**
		 * A number denoting the gravity of this planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
		*/
		gravity?:s_String;
		id:s_ID;
		/**
		 * indicates if the record is published
		*/
		isPublished?:s_Boolean;
		/**
		 * The name of the planet
		*/
		name?:s_String;
		/**
		 * The number of standard days it takes for this planet to complete a single orbit of its local star.
		*/
		orbitalPeriod?:s_Int;
		/**
		 * The average population of sentient beings inhabiting this planet.
		*/
		population?:s_Float;
		/**
		 * The number of standard hours it takes for this planet to complete a single rotation on its axis.
		*/
		rotationPeriod?:s_Int;
		/**
		 * The percentage of the planet surface that is naturally occurring water or bodies of water.
		*/
		surfaceWater?:s_Float;
		/**
		 * The terrain of this planet.
		*/
		terrain:s_String[];
		filmsIds:s_ID[];
		films:inpob_PlanetfilmsFilm[];
		residentsIds:s_ID[];
		residents:inpob_PlanetresidentsPerson[]
	};
export type inpob_UpdateSpecies = {
		/**
		 * The average height of this species in centimeters.
		*/
		averageHeight?:s_Int;
		/**
		 * The average lifespan of this species in years.
		*/
		averageLifespan?:s_Int;
		/**
		 * The classification of this species, such as "mammal" or "reptile".
		*/
		classification?:s_String;
		/**
		 * The designation of this species, such as "sentient".
		*/
		designation?:s_String;
		/**
		 * The eye colors for this species, "UNKNOWN" if not known, null if this species does not typically have eyes.
		*/
		eyeColor:enum_SPECIES_EYE_COLOR[];
		/**
		 * The hair colors for this species, "UNKNOWN" if not known, null if this species does not typically have hairs.
		*/
		hairColor:enum_SPECIES_HAIR_COLOR[];
		id:s_ID;
		/**
		 * indicates if the record is published
		*/
		isPublished?:s_Boolean;
		/**
		 * The language commonly spoken by this species.
		*/
		language?:s_String;
		/**
		 * The name of this species.
		*/
		name?:s_String;
		/**
		 * The skin colors for this species, "UNKNOWN" if not known, null if this species does not typically have a skin.
		*/
		skinColor:enum_SPECIES_SKIN_COLOR[];
		filmsIds:s_ID[];
		films:inpob_SpeciesfilmsFilm[];
		peopleIds:s_ID[];
		people:inpob_SpeciespeoplePerson[]
	};
export type inpob_UpdateStarship = {
		/**
		 * The maximum number of kilograms that this starship can transport.
		*/
		cargoCapacity?:s_Float;
		/**
		 * The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation"
		*/
		class?:s_String;
		/**
		 * The maximum length of time that this starship can provide consumables for its entire crew without having to resupply.
		*/
		consumables?:s_String;
		/**
		 *  The cost of this starship new, in galactic credits.
		*/
		costInCredits?:s_Float;
		/**
		 * The number of personnel needed to run or pilot this starship.
		*/
		crew?:s_Int;
		/**
		 * The class of this starships hyperdrive.
		*/
		hyperdriveRating?:s_Float;
		id:s_ID;
		/**
		 * indicates if the record is published
		*/
		isPublished?:s_Boolean;
		/**
		 * The length of this starship in meters.
		*/
		length?:s_Float;
		/**
		 * The manufacturer of this starship.
		*/
		manufacturer:s_String[];
		/**
		 *  The maximum speed of this starship in the atmosphere. null if this starship is incapable of atmospheric flight.
		*/
		maxAtmospheringSpeed?:s_Int;
		/**
		 * The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe.
		*/
		mglt?:s_Int;
		/**
		 * The name of this starship. The common name, such as "Death Star".
		*/
		name?:s_String;
		/**
		 *  The number of non-essential people this starship can transport.
		*/
		passengers?:s_Int;
		filmsIds:s_ID[];
		films:inpob_StarshipfilmsFilm[];
		pilotsIds:s_ID[];
		pilots:inpob_StarshippilotsPerson[]
	};
export type inpob_UpdateVehicle = {
		/**
		 * The maximum number of kilograms that this vehicle can transport.
		*/
		cargoCapacity?:s_Int;
		/**
		 *  The class of this vehicle, such as "Wheeled" or "Repulsorcraft".
		*/
		class?:s_String;
		/**
		 * The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply.
		*/
		consumables?:s_String;
		/**
		 * The cost of this vehicle new, in Galactic Credits.
		*/
		costInCredits?:s_Int;
		/**
		 * The number of personnel needed to run or pilot this vehicle.
		*/
		crew?:s_Int;
		id:s_ID;
		/**
		 * indicates if the record is published
		*/
		isPublished?:s_Boolean;
		/**
		 *  The length of this vehicle in meters.
		*/
		length?:s_Float;
		/**
		 * The manufacturer of this vehicle.
		*/
		manufacturer:s_String[];
		/**
		 * The maximum speed of this vehicle in the atmosphere.
		*/
		maxAtmospheringSpeed?:s_Int;
		/**
		 * The model or official name of this vehicle. Such as "All-Terrain Attack Transport".
		*/
		model?:s_String;
		/**
		 * The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike".
		*/
		name?:s_String;
		/**
		 * The number of non-essential people this vehicle can transport.
		*/
		passengers?:s_Int;
		filmsIds:s_ID[];
		films:inpob_VehiclefilmsFilm[];
		pilotsIds:s_ID[];
		pilots:inpob_VehiclepilotsPerson[]
	};
export type object_VehiclePreviousValues = {
	payload:{
		/**
		 * The maximum number of kilograms that this vehicle can transport.
		*/
		cargoCapacity?:s_Int;
		/**
		 *  The class of this vehicle, such as "Wheeled" or "Repulsorcraft".
		*/
		class?:s_String;
		/**
		 * The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply.
		*/
		consumables?:s_String;
		/**
		 * The cost of this vehicle new, in Galactic Credits.
		*/
		costInCredits?:s_Int;
		createdAt:s_DateTime;
		/**
		 * The number of personnel needed to run or pilot this vehicle.
		*/
		crew?:s_Int;
		id:s_ID;
		/**
		 * indicates if the record is published
		*/
		isPublished:s_Boolean;
		/**
		 *  The length of this vehicle in meters.
		*/
		length?:s_Float;
		/**
		 * The manufacturer of this vehicle.
		*/
		manufacturer:s_String[];
		/**
		 * The maximum speed of this vehicle in the atmosphere.
		*/
		maxAtmospheringSpeed?:s_Int;
		/**
		 * The model or official name of this vehicle. Such as "All-Terrain Attack Transport".
		*/
		model?:s_String;
		/**
		 * The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike".
		*/
		name:s_String;
		/**
		 * The number of non-essential people this vehicle can transport.
		*/
		passengers?:s_Int;
		updatedAt:s_DateTime
	};
};
export type inpob_VehicleSubscriptionFilter = {
		/**
		 * Logical AND on all given filters.
		*/
		AND:inpob_VehicleSubscriptionFilter[];
		/**
		 * Logical OR on all given filters.
		*/
		OR:inpob_VehicleSubscriptionFilter[];
		/**
		 * The subscription event gets dispatched when it's listed in mutation_in
		*/
		mutation_in:enum__ModelMutationType[];
		/**
		 * The subscription event gets only dispatched when one of the updated fields names is included in this list
		*/
		updatedFields_contains?:s_String;
		/**
		 * The subscription event gets only dispatched when all of the field names included in this list have been updated
		*/
		updatedFields_contains_every:s_String[];
		/**
		 * The subscription event gets only dispatched when some of the field names included in this list have been updated
		*/
		updatedFields_contains_some:s_String[];
		node?:inpob_VehicleSubscriptionFilterNode
	};
export type inpob_VehicleSubscriptionFilterNode = {
		cargoCapacity?:s_Int;
		/**
		 * All values that are not equal to given value.
		*/
		cargoCapacity_not?:s_Int;
		/**
		 * All values that are contained in given list.
		*/
		cargoCapacity_in:s_Int[];
		/**
		 * All values that are not contained in given list.
		*/
		cargoCapacity_not_in:s_Int[];
		/**
		 * All values less than the given value.
		*/
		cargoCapacity_lt?:s_Int;
		/**
		 * All values less than or equal the given value.
		*/
		cargoCapacity_lte?:s_Int;
		/**
		 * All values greater than the given value.
		*/
		cargoCapacity_gt?:s_Int;
		/**
		 * All values greater than or equal the given value.
		*/
		cargoCapacity_gte?:s_Int;
		class?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		class_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		class_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		class_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		class_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		class_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		class_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		class_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		class_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		class_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		class_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		class_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		class_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		class_not_ends_with?:s_String;
		consumables?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		consumables_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		consumables_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		consumables_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		consumables_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		consumables_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		consumables_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		consumables_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		consumables_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		consumables_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		consumables_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		consumables_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		consumables_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		consumables_not_ends_with?:s_String;
		costInCredits?:s_Int;
		/**
		 * All values that are not equal to given value.
		*/
		costInCredits_not?:s_Int;
		/**
		 * All values that are contained in given list.
		*/
		costInCredits_in:s_Int[];
		/**
		 * All values that are not contained in given list.
		*/
		costInCredits_not_in:s_Int[];
		/**
		 * All values less than the given value.
		*/
		costInCredits_lt?:s_Int;
		/**
		 * All values less than or equal the given value.
		*/
		costInCredits_lte?:s_Int;
		/**
		 * All values greater than the given value.
		*/
		costInCredits_gt?:s_Int;
		/**
		 * All values greater than or equal the given value.
		*/
		costInCredits_gte?:s_Int;
		createdAt?:s_DateTime;
		/**
		 * All values that are not equal to given value.
		*/
		createdAt_not?:s_DateTime;
		/**
		 * All values that are contained in given list.
		*/
		createdAt_in:s_DateTime[];
		/**
		 * All values that are not contained in given list.
		*/
		createdAt_not_in:s_DateTime[];
		/**
		 * All values less than the given value.
		*/
		createdAt_lt?:s_DateTime;
		/**
		 * All values less than or equal the given value.
		*/
		createdAt_lte?:s_DateTime;
		/**
		 * All values greater than the given value.
		*/
		createdAt_gt?:s_DateTime;
		/**
		 * All values greater than or equal the given value.
		*/
		createdAt_gte?:s_DateTime;
		crew?:s_Int;
		/**
		 * All values that are not equal to given value.
		*/
		crew_not?:s_Int;
		/**
		 * All values that are contained in given list.
		*/
		crew_in:s_Int[];
		/**
		 * All values that are not contained in given list.
		*/
		crew_not_in:s_Int[];
		/**
		 * All values less than the given value.
		*/
		crew_lt?:s_Int;
		/**
		 * All values less than or equal the given value.
		*/
		crew_lte?:s_Int;
		/**
		 * All values greater than the given value.
		*/
		crew_gt?:s_Int;
		/**
		 * All values greater than or equal the given value.
		*/
		crew_gte?:s_Int;
		id?:s_ID;
		/**
		 * All values that are not equal to given value.
		*/
		id_not?:s_ID;
		/**
		 * All values that are contained in given list.
		*/
		id_in:s_ID[];
		/**
		 * All values that are not contained in given list.
		*/
		id_not_in:s_ID[];
		/**
		 * All values less than the given value.
		*/
		id_lt?:s_ID;
		/**
		 * All values less than or equal the given value.
		*/
		id_lte?:s_ID;
		/**
		 * All values greater than the given value.
		*/
		id_gt?:s_ID;
		/**
		 * All values greater than or equal the given value.
		*/
		id_gte?:s_ID;
		/**
		 * All values containing the given string.
		*/
		id_contains?:s_ID;
		/**
		 * All values not containing the given string.
		*/
		id_not_contains?:s_ID;
		/**
		 * All values starting with the given string.
		*/
		id_starts_with?:s_ID;
		/**
		 * All values not starting with the given string.
		*/
		id_not_starts_with?:s_ID;
		/**
		 * All values ending with the given string.
		*/
		id_ends_with?:s_ID;
		/**
		 * All values not ending with the given string.
		*/
		id_not_ends_with?:s_ID;
		isPublished?:s_Boolean;
		/**
		 * All values that are not equal to given value.
		*/
		isPublished_not?:s_Boolean;
		length?:s_Float;
		/**
		 * All values that are not equal to given value.
		*/
		length_not?:s_Float;
		/**
		 * All values that are contained in given list.
		*/
		length_in:s_Float[];
		/**
		 * All values that are not contained in given list.
		*/
		length_not_in:s_Float[];
		/**
		 * All values less than the given value.
		*/
		length_lt?:s_Float;
		/**
		 * All values less than or equal the given value.
		*/
		length_lte?:s_Float;
		/**
		 * All values greater than the given value.
		*/
		length_gt?:s_Float;
		/**
		 * All values greater than or equal the given value.
		*/
		length_gte?:s_Float;
		maxAtmospheringSpeed?:s_Int;
		/**
		 * All values that are not equal to given value.
		*/
		maxAtmospheringSpeed_not?:s_Int;
		/**
		 * All values that are contained in given list.
		*/
		maxAtmospheringSpeed_in:s_Int[];
		/**
		 * All values that are not contained in given list.
		*/
		maxAtmospheringSpeed_not_in:s_Int[];
		/**
		 * All values less than the given value.
		*/
		maxAtmospheringSpeed_lt?:s_Int;
		/**
		 * All values less than or equal the given value.
		*/
		maxAtmospheringSpeed_lte?:s_Int;
		/**
		 * All values greater than the given value.
		*/
		maxAtmospheringSpeed_gt?:s_Int;
		/**
		 * All values greater than or equal the given value.
		*/
		maxAtmospheringSpeed_gte?:s_Int;
		model?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		model_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		model_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		model_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		model_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		model_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		model_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		model_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		model_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		model_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		model_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		model_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		model_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		model_not_ends_with?:s_String;
		name?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		name_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		name_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		name_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		name_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		name_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		name_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		name_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		name_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		name_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		name_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		name_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		name_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		name_not_ends_with?:s_String;
		passengers?:s_Int;
		/**
		 * All values that are not equal to given value.
		*/
		passengers_not?:s_Int;
		/**
		 * All values that are contained in given list.
		*/
		passengers_in:s_Int[];
		/**
		 * All values that are not contained in given list.
		*/
		passengers_not_in:s_Int[];
		/**
		 * All values less than the given value.
		*/
		passengers_lt?:s_Int;
		/**
		 * All values less than or equal the given value.
		*/
		passengers_lte?:s_Int;
		/**
		 * All values greater than the given value.
		*/
		passengers_gt?:s_Int;
		/**
		 * All values greater than or equal the given value.
		*/
		passengers_gte?:s_Int;
		updatedAt?:s_DateTime;
		/**
		 * All values that are not equal to given value.
		*/
		updatedAt_not?:s_DateTime;
		/**
		 * All values that are contained in given list.
		*/
		updatedAt_in:s_DateTime[];
		/**
		 * All values that are not contained in given list.
		*/
		updatedAt_not_in:s_DateTime[];
		/**
		 * All values less than the given value.
		*/
		updatedAt_lt?:s_DateTime;
		/**
		 * All values less than or equal the given value.
		*/
		updatedAt_lte?:s_DateTime;
		/**
		 * All values greater than the given value.
		*/
		updatedAt_gt?:s_DateTime;
		/**
		 * All values greater than or equal the given value.
		*/
		updatedAt_gte?:s_DateTime;
		films_every?:inpob_FilmFilter;
		films_some?:inpob_FilmFilter;
		films_none?:inpob_FilmFilter;
		pilots_every?:inpob_PersonFilter;
		pilots_some?:inpob_PersonFilter;
		pilots_none?:inpob_PersonFilter
	};
export type object_VehicleSubscriptionPayload = {
	payload:{
		mutation:enum__ModelMutationType;
		node?:query["Vehicle"];
		updatedFields:s_String[];
		previousValues?:object_VehiclePreviousValues
	};
};
export type inpob_VehiclefilmsFilm = {
		/**
		 * The name of the director of this film.
		*/
		director?:s_String;
		/**
		 * The episode number of this film.
		*/
		episodeId:s_Int;
		/**
		 * indicates if the record is published
		*/
		isPublished?:s_Boolean;
		/**
		 * The opening paragraphs at the beginning of this film.
		*/
		openingCrawl?:s_String;
		/**
		 * The names of the producers of this film.
		*/
		producers:s_String[];
		/**
		 *  The ISO 8601 date format of film release at original creator country.
		*/
		releaseDate?:s_DateTime;
		/**
		 * The title of this film
		*/
		title:s_String;
		charactersIds:s_ID[];
		characters:inpob_FilmcharactersPerson[];
		planetsIds:s_ID[];
		planets:inpob_FilmplanetsPlanet[];
		speciesIds:s_ID[];
		species:inpob_FilmspeciesSpecies[];
		starshipsIds:s_ID[];
		starships:inpob_FilmstarshipsStarship[];
		vehiclesIds:s_ID[];
		vehicles:inpob_FilmvehiclesVehicle[]
	};
export type inpob_VehiclepilotsPerson = {
		/**
		 * The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.
		*/
		birthYear?:s_String;
		/**
		 * The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye.
		*/
		eyeColor:enum_PERSON_EYE_COLOR[];
		/**
		 *  The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender.
		*/
		gender?:enum_PERSON_GENDER;
		/**
		 * The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair.
		*/
		hairColor:enum_PERSON_HAIR_COLOR[];
		/**
		 * The height of the person in centimeters.
		*/
		height?:s_Int;
		/**
		 * indicates if the record is published
		*/
		isPublished?:s_Boolean;
		/**
		 * The mass of the person in kilograms.
		*/
		mass?:s_Float;
		/**
		 * The name of this person.
		*/
		name:s_String;
		/**
		 * The skin color of this person.
		*/
		skinColor:enum_PERSON_SKIN_COLOR[];
		homeworldId?:s_ID;
		homeworld?:inpob_PersonhomeworldPlanet;
		filmsIds:s_ID[];
		films:inpob_PersonfilmsFilm[];
		speciesIds:s_ID[];
		species:inpob_PersonspeciesSpecies[];
		starshipsIds:s_ID[];
		starships:inpob_PersonstarshipsStarship[];
		vehiclesIds:s_ID[];
		vehicles:inpob_PersonvehiclesVehicle[]
	};
export type enum__ModelMutationType  = 'CREATED' | 'UPDATED' | 'DELETED';
/**
 * System model for Assets
*/
export type object_Asset = {
	payload:{
		createdAt:s_DateTime;
		/**
		 * Original File Name
		*/
		fileName:s_String;
		/**
		 * The File Handle
		*/
		handle:s_String;
		/**
		 * The height of the file in case it is an image
		*/
		height?:s_Float;
		id:s_ID;
		/**
		 * The Mime Type
		*/
		mimeType?:s_String;
		/**
		 * The Size Of The File
		*/
		size:s_Float;
		updatedAt:s_DateTime;
		/**
		 * The Url Of The Asset
		*/
		url:s_String;
		/**
		 * The width of the file in case it is an image
		*/
		width?:s_Float
	};
};
export type inpob_AssetFilter = {
		/**
		 * Logical AND on all given filters.
		*/
		AND:inpob_AssetFilter[];
		/**
		 * Logical OR on all given filters.
		*/
		OR:inpob_AssetFilter[];
		createdAt?:s_DateTime;
		/**
		 * All values that are not equal to given value.
		*/
		createdAt_not?:s_DateTime;
		/**
		 * All values that are contained in given list.
		*/
		createdAt_in:s_DateTime[];
		/**
		 * All values that are not contained in given list.
		*/
		createdAt_not_in:s_DateTime[];
		/**
		 * All values less than the given value.
		*/
		createdAt_lt?:s_DateTime;
		/**
		 * All values less than or equal the given value.
		*/
		createdAt_lte?:s_DateTime;
		/**
		 * All values greater than the given value.
		*/
		createdAt_gt?:s_DateTime;
		/**
		 * All values greater than or equal the given value.
		*/
		createdAt_gte?:s_DateTime;
		fileName?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		fileName_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		fileName_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		fileName_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		fileName_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		fileName_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		fileName_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		fileName_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		fileName_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		fileName_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		fileName_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		fileName_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		fileName_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		fileName_not_ends_with?:s_String;
		handle?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		handle_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		handle_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		handle_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		handle_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		handle_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		handle_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		handle_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		handle_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		handle_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		handle_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		handle_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		handle_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		handle_not_ends_with?:s_String;
		height?:s_Float;
		/**
		 * All values that are not equal to given value.
		*/
		height_not?:s_Float;
		/**
		 * All values that are contained in given list.
		*/
		height_in:s_Float[];
		/**
		 * All values that are not contained in given list.
		*/
		height_not_in:s_Float[];
		/**
		 * All values less than the given value.
		*/
		height_lt?:s_Float;
		/**
		 * All values less than or equal the given value.
		*/
		height_lte?:s_Float;
		/**
		 * All values greater than the given value.
		*/
		height_gt?:s_Float;
		/**
		 * All values greater than or equal the given value.
		*/
		height_gte?:s_Float;
		id?:s_ID;
		/**
		 * All values that are not equal to given value.
		*/
		id_not?:s_ID;
		/**
		 * All values that are contained in given list.
		*/
		id_in:s_ID[];
		/**
		 * All values that are not contained in given list.
		*/
		id_not_in:s_ID[];
		/**
		 * All values less than the given value.
		*/
		id_lt?:s_ID;
		/**
		 * All values less than or equal the given value.
		*/
		id_lte?:s_ID;
		/**
		 * All values greater than the given value.
		*/
		id_gt?:s_ID;
		/**
		 * All values greater than or equal the given value.
		*/
		id_gte?:s_ID;
		/**
		 * All values containing the given string.
		*/
		id_contains?:s_ID;
		/**
		 * All values not containing the given string.
		*/
		id_not_contains?:s_ID;
		/**
		 * All values starting with the given string.
		*/
		id_starts_with?:s_ID;
		/**
		 * All values not starting with the given string.
		*/
		id_not_starts_with?:s_ID;
		/**
		 * All values ending with the given string.
		*/
		id_ends_with?:s_ID;
		/**
		 * All values not ending with the given string.
		*/
		id_not_ends_with?:s_ID;
		mimeType?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		mimeType_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		mimeType_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		mimeType_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		mimeType_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		mimeType_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		mimeType_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		mimeType_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		mimeType_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		mimeType_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		mimeType_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		mimeType_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		mimeType_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		mimeType_not_ends_with?:s_String;
		size?:s_Float;
		/**
		 * All values that are not equal to given value.
		*/
		size_not?:s_Float;
		/**
		 * All values that are contained in given list.
		*/
		size_in:s_Float[];
		/**
		 * All values that are not contained in given list.
		*/
		size_not_in:s_Float[];
		/**
		 * All values less than the given value.
		*/
		size_lt?:s_Float;
		/**
		 * All values less than or equal the given value.
		*/
		size_lte?:s_Float;
		/**
		 * All values greater than the given value.
		*/
		size_gt?:s_Float;
		/**
		 * All values greater than or equal the given value.
		*/
		size_gte?:s_Float;
		updatedAt?:s_DateTime;
		/**
		 * All values that are not equal to given value.
		*/
		updatedAt_not?:s_DateTime;
		/**
		 * All values that are contained in given list.
		*/
		updatedAt_in:s_DateTime[];
		/**
		 * All values that are not contained in given list.
		*/
		updatedAt_not_in:s_DateTime[];
		/**
		 * All values less than the given value.
		*/
		updatedAt_lt?:s_DateTime;
		/**
		 * All values less than or equal the given value.
		*/
		updatedAt_lte?:s_DateTime;
		/**
		 * All values greater than the given value.
		*/
		updatedAt_gt?:s_DateTime;
		/**
		 * All values greater than or equal the given value.
		*/
		updatedAt_gte?:s_DateTime;
		url?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		url_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		url_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		url_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		url_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		url_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		url_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		url_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		url_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		url_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		url_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		url_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		url_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		url_not_ends_with?:s_String;
		width?:s_Float;
		/**
		 * All values that are not equal to given value.
		*/
		width_not?:s_Float;
		/**
		 * All values that are contained in given list.
		*/
		width_in:s_Float[];
		/**
		 * All values that are not contained in given list.
		*/
		width_not_in:s_Float[];
		/**
		 * All values less than the given value.
		*/
		width_lt?:s_Float;
		/**
		 * All values less than or equal the given value.
		*/
		width_lte?:s_Float;
		/**
		 * All values greater than the given value.
		*/
		width_gt?:s_Float;
		/**
		 * All values greater than or equal the given value.
		*/
		width_gte?:s_Float
	};
export type enum_AssetOrderBy  = 'createdAt_ASC' | 'createdAt_DESC' | 'fileName_ASC' | 'fileName_DESC' | 'handle_ASC' | 'handle_DESC' | 'height_ASC' | 'height_DESC' | 'id_ASC' | 'id_DESC' | 'mimeType_ASC' | 'mimeType_DESC' | 'size_ASC' | 'size_DESC' | 'updatedAt_ASC' | 'updatedAt_DESC' | 'url_ASC' | 'url_DESC' | 'width_ASC' | 'width_DESC';
export type s_DateTime = any;
/**
 * A Film is a single film.
*/
export type object_Film = {
	payload:{
		characters:{
			payload:Arrayed<query["Person"]>['payload'];
			args?:{
				filter?:inpob_PersonFilter;
				orderBy?:enum_PersonOrderBy;
				skip?:s_Int;
				after?:s_String;
				before?:s_String;
				first?:s_Int;
				last?:s_Int
			};
		};
		createdAt:s_DateTime;
		/**
		 * The name of the director of this film.
		*/
		director?:s_String;
		/**
		 * The episode number of this film.
		*/
		episodeId:s_Int;
		id:s_ID;
		/**
		 * indicates if the record is published
		*/
		isPublished:s_Boolean;
		/**
		 * The opening paragraphs at the beginning of this film.
		*/
		openingCrawl?:s_String;
		planets:{
			payload:Arrayed<query["Planet"]>['payload'];
			args?:{
				filter?:inpob_PlanetFilter;
				orderBy?:enum_PlanetOrderBy;
				skip?:s_Int;
				after?:s_String;
				before?:s_String;
				first?:s_Int;
				last?:s_Int
			};
		};
		/**
		 * The names of the producers of this film.
		*/
		producers:s_String[];
		/**
		 *  The ISO 8601 date format of film release at original creator country.
		*/
		releaseDate?:s_DateTime;
		species:{
			payload:Arrayed<query["Species"]>['payload'];
			args?:{
				filter?:inpob_SpeciesFilter;
				orderBy?:enum_SpeciesOrderBy;
				skip?:s_Int;
				after?:s_String;
				before?:s_String;
				first?:s_Int;
				last?:s_Int
			};
		};
		starships:{
			payload:Arrayed<query["Starship"]>['payload'];
			args?:{
				filter?:inpob_StarshipFilter;
				orderBy?:enum_StarshipOrderBy;
				skip?:s_Int;
				after?:s_String;
				before?:s_String;
				first?:s_Int;
				last?:s_Int
			};
		};
		/**
		 * The title of this film
		*/
		title:s_String;
		updatedAt:s_DateTime;
		vehicles:{
			payload:Arrayed<query["Vehicle"]>['payload'];
			args?:{
				filter?:inpob_VehicleFilter;
				orderBy?:enum_VehicleOrderBy;
				skip?:s_Int;
				after?:s_String;
				before?:s_String;
				first?:s_Int;
				last?:s_Int
			};
		};
		/**
		 * Meta information about the query.
		*/
		_charactersMeta:{
			payload:object__QueryMeta['payload'];
			args?:{
				filter?:inpob_PersonFilter;
				orderBy?:enum_PersonOrderBy;
				skip?:s_Int;
				after?:s_String;
				before?:s_String;
				first?:s_Int;
				last?:s_Int
			};
		};
		/**
		 * Meta information about the query.
		*/
		_planetsMeta:{
			payload:object__QueryMeta['payload'];
			args?:{
				filter?:inpob_PlanetFilter;
				orderBy?:enum_PlanetOrderBy;
				skip?:s_Int;
				after?:s_String;
				before?:s_String;
				first?:s_Int;
				last?:s_Int
			};
		};
		/**
		 * Meta information about the query.
		*/
		_speciesMeta:{
			payload:object__QueryMeta['payload'];
			args?:{
				filter?:inpob_SpeciesFilter;
				orderBy?:enum_SpeciesOrderBy;
				skip?:s_Int;
				after?:s_String;
				before?:s_String;
				first?:s_Int;
				last?:s_Int
			};
		};
		/**
		 * Meta information about the query.
		*/
		_starshipsMeta:{
			payload:object__QueryMeta['payload'];
			args?:{
				filter?:inpob_StarshipFilter;
				orderBy?:enum_StarshipOrderBy;
				skip?:s_Int;
				after?:s_String;
				before?:s_String;
				first?:s_Int;
				last?:s_Int
			};
		};
		/**
		 * Meta information about the query.
		*/
		_vehiclesMeta:{
			payload:object__QueryMeta['payload'];
			args?:{
				filter?:inpob_VehicleFilter;
				orderBy?:enum_VehicleOrderBy;
				skip?:s_Int;
				after?:s_String;
				before?:s_String;
				first?:s_Int;
				last?:s_Int
			};
		}
	};
};
export type inpob_FilmFilter = {
		/**
		 * Logical AND on all given filters.
		*/
		AND:inpob_FilmFilter[];
		/**
		 * Logical OR on all given filters.
		*/
		OR:inpob_FilmFilter[];
		createdAt?:s_DateTime;
		/**
		 * All values that are not equal to given value.
		*/
		createdAt_not?:s_DateTime;
		/**
		 * All values that are contained in given list.
		*/
		createdAt_in:s_DateTime[];
		/**
		 * All values that are not contained in given list.
		*/
		createdAt_not_in:s_DateTime[];
		/**
		 * All values less than the given value.
		*/
		createdAt_lt?:s_DateTime;
		/**
		 * All values less than or equal the given value.
		*/
		createdAt_lte?:s_DateTime;
		/**
		 * All values greater than the given value.
		*/
		createdAt_gt?:s_DateTime;
		/**
		 * All values greater than or equal the given value.
		*/
		createdAt_gte?:s_DateTime;
		director?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		director_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		director_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		director_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		director_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		director_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		director_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		director_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		director_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		director_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		director_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		director_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		director_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		director_not_ends_with?:s_String;
		episodeId?:s_Int;
		/**
		 * All values that are not equal to given value.
		*/
		episodeId_not?:s_Int;
		/**
		 * All values that are contained in given list.
		*/
		episodeId_in:s_Int[];
		/**
		 * All values that are not contained in given list.
		*/
		episodeId_not_in:s_Int[];
		/**
		 * All values less than the given value.
		*/
		episodeId_lt?:s_Int;
		/**
		 * All values less than or equal the given value.
		*/
		episodeId_lte?:s_Int;
		/**
		 * All values greater than the given value.
		*/
		episodeId_gt?:s_Int;
		/**
		 * All values greater than or equal the given value.
		*/
		episodeId_gte?:s_Int;
		id?:s_ID;
		/**
		 * All values that are not equal to given value.
		*/
		id_not?:s_ID;
		/**
		 * All values that are contained in given list.
		*/
		id_in:s_ID[];
		/**
		 * All values that are not contained in given list.
		*/
		id_not_in:s_ID[];
		/**
		 * All values less than the given value.
		*/
		id_lt?:s_ID;
		/**
		 * All values less than or equal the given value.
		*/
		id_lte?:s_ID;
		/**
		 * All values greater than the given value.
		*/
		id_gt?:s_ID;
		/**
		 * All values greater than or equal the given value.
		*/
		id_gte?:s_ID;
		/**
		 * All values containing the given string.
		*/
		id_contains?:s_ID;
		/**
		 * All values not containing the given string.
		*/
		id_not_contains?:s_ID;
		/**
		 * All values starting with the given string.
		*/
		id_starts_with?:s_ID;
		/**
		 * All values not starting with the given string.
		*/
		id_not_starts_with?:s_ID;
		/**
		 * All values ending with the given string.
		*/
		id_ends_with?:s_ID;
		/**
		 * All values not ending with the given string.
		*/
		id_not_ends_with?:s_ID;
		isPublished?:s_Boolean;
		/**
		 * All values that are not equal to given value.
		*/
		isPublished_not?:s_Boolean;
		openingCrawl?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		openingCrawl_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		openingCrawl_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		openingCrawl_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		openingCrawl_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		openingCrawl_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		openingCrawl_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		openingCrawl_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		openingCrawl_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		openingCrawl_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		openingCrawl_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		openingCrawl_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		openingCrawl_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		openingCrawl_not_ends_with?:s_String;
		releaseDate?:s_DateTime;
		/**
		 * All values that are not equal to given value.
		*/
		releaseDate_not?:s_DateTime;
		/**
		 * All values that are contained in given list.
		*/
		releaseDate_in:s_DateTime[];
		/**
		 * All values that are not contained in given list.
		*/
		releaseDate_not_in:s_DateTime[];
		/**
		 * All values less than the given value.
		*/
		releaseDate_lt?:s_DateTime;
		/**
		 * All values less than or equal the given value.
		*/
		releaseDate_lte?:s_DateTime;
		/**
		 * All values greater than the given value.
		*/
		releaseDate_gt?:s_DateTime;
		/**
		 * All values greater than or equal the given value.
		*/
		releaseDate_gte?:s_DateTime;
		title?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		title_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		title_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		title_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		title_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		title_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		title_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		title_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		title_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		title_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		title_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		title_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		title_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		title_not_ends_with?:s_String;
		updatedAt?:s_DateTime;
		/**
		 * All values that are not equal to given value.
		*/
		updatedAt_not?:s_DateTime;
		/**
		 * All values that are contained in given list.
		*/
		updatedAt_in:s_DateTime[];
		/**
		 * All values that are not contained in given list.
		*/
		updatedAt_not_in:s_DateTime[];
		/**
		 * All values less than the given value.
		*/
		updatedAt_lt?:s_DateTime;
		/**
		 * All values less than or equal the given value.
		*/
		updatedAt_lte?:s_DateTime;
		/**
		 * All values greater than the given value.
		*/
		updatedAt_gt?:s_DateTime;
		/**
		 * All values greater than or equal the given value.
		*/
		updatedAt_gte?:s_DateTime;
		characters_every?:inpob_PersonFilter;
		characters_some?:inpob_PersonFilter;
		characters_none?:inpob_PersonFilter;
		planets_every?:inpob_PlanetFilter;
		planets_some?:inpob_PlanetFilter;
		planets_none?:inpob_PlanetFilter;
		species_every?:inpob_SpeciesFilter;
		species_some?:inpob_SpeciesFilter;
		species_none?:inpob_SpeciesFilter;
		starships_every?:inpob_StarshipFilter;
		starships_some?:inpob_StarshipFilter;
		starships_none?:inpob_StarshipFilter;
		vehicles_every?:inpob_VehicleFilter;
		vehicles_some?:inpob_VehicleFilter;
		vehicles_none?:inpob_VehicleFilter
	};
export type enum_FilmOrderBy  = 'createdAt_ASC' | 'createdAt_DESC' | 'director_ASC' | 'director_DESC' | 'episodeId_ASC' | 'episodeId_DESC' | 'id_ASC' | 'id_DESC' | 'isPublished_ASC' | 'isPublished_DESC' | 'openingCrawl_ASC' | 'openingCrawl_DESC' | 'releaseDate_ASC' | 'releaseDate_DESC' | 'title_ASC' | 'title_DESC' | 'updatedAt_ASC' | 'updatedAt_DESC';
/**
 * An object with an ID
*/
export interface INTERFACE_Node{
	payload:{
		__typename:string;
		id:s_ID
			__onAsset?:{
			__type:'fragment';
			payload:query["Asset"]["payload"]
		};
		__onFilm?:{
			__type:'fragment';
			payload:query["Film"]["payload"]
		};
		__onPerson?:{
			__type:'fragment';
			payload:query["Person"]["payload"]
		};
		__onPlanet?:{
			__type:'fragment';
			payload:query["Planet"]["payload"]
		};
		__onSpecies?:{
			__type:'fragment';
			payload:query["Species"]["payload"]
		};
		__onStarship?:{
			__type:'fragment';
			payload:query["Starship"]["payload"]
		};
		__onVehicle?:{
			__type:'fragment';
			payload:query["Vehicle"]["payload"]
		}
	
	}
}
/**
 * The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye.
*/
export type enum_PERSON_EYE_COLOR  = 'UNKNOWN' | 'BLUE' | 'YELLOW' | 'RED' | 'BROWN' | 'BLUEGREY' | 'BLACK' | 'ORANGE' | 'HAZEL' | 'PINK' | 'GOLD' | 'GREEN' | 'WHITE' | 'DARK';
/**
 *  The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender.
*/
export type enum_PERSON_GENDER  = 'UNKNOWN' | 'MALE' | 'FEMALE' | 'HERMAPHRODITE';
/**
 * The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair.
*/
export type enum_PERSON_HAIR_COLOR  = 'AUBURN' | 'BLACK' | 'BLONDE' | 'BROWN' | 'GREY' | 'UNKNOWN' | 'WHITE';
/**
 * The skin color of this person.
*/
export type enum_PERSON_SKIN_COLOR  = 'UNKNOWN' | 'FAIR' | 'GOLD' | 'WHITE' | 'LIGHT' | 'GREEN' | 'GREENTAN' | 'PALE' | 'METAL' | 'DARK' | 'BROWNMOTTLE' | 'BROWN' | 'GREY' | 'MOTTLEDGREEN' | 'ORANGE' | 'BLUE' | 'RED' | 'YELLOW' | 'TAN' | 'SILVER';
/**
 * A Person is an individual person or character within the Star Wars universe
*/
export type object_Person = {
	payload:{
		/**
		 * The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.
		*/
		birthYear?:s_String;
		createdAt:s_DateTime;
		/**
		 * The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye.
		*/
		eyeColor:enum_PERSON_EYE_COLOR[];
		films:{
			payload:Arrayed<query["Film"]>['payload'];
			args?:{
				filter?:inpob_FilmFilter;
				orderBy?:enum_FilmOrderBy;
				skip?:s_Int;
				after?:s_String;
				before?:s_String;
				first?:s_Int;
				last?:s_Int
			};
		};
		/**
		 *  The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender.
		*/
		gender?:enum_PERSON_GENDER;
		/**
		 * The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair.
		*/
		hairColor:enum_PERSON_HAIR_COLOR[];
		/**
		 * The height of the person in centimeters.
		*/
		height?:s_Int;
		homeworld?:{
			payload:query["Planet"]['payload'];
			args?:{
				filter?:inpob_PlanetFilter
			};
		};
		id:s_ID;
		/**
		 * indicates if the record is published
		*/
		isPublished:s_Boolean;
		/**
		 * The mass of the person in kilograms.
		*/
		mass?:s_Float;
		/**
		 * The name of this person.
		*/
		name:s_String;
		/**
		 * The skin color of this person.
		*/
		skinColor:enum_PERSON_SKIN_COLOR[];
		species:{
			payload:Arrayed<query["Species"]>['payload'];
			args?:{
				filter?:inpob_SpeciesFilter;
				orderBy?:enum_SpeciesOrderBy;
				skip?:s_Int;
				after?:s_String;
				before?:s_String;
				first?:s_Int;
				last?:s_Int
			};
		};
		starships:{
			payload:Arrayed<query["Starship"]>['payload'];
			args?:{
				filter?:inpob_StarshipFilter;
				orderBy?:enum_StarshipOrderBy;
				skip?:s_Int;
				after?:s_String;
				before?:s_String;
				first?:s_Int;
				last?:s_Int
			};
		};
		updatedAt:s_DateTime;
		vehicles:{
			payload:Arrayed<query["Vehicle"]>['payload'];
			args?:{
				filter?:inpob_VehicleFilter;
				orderBy?:enum_VehicleOrderBy;
				skip?:s_Int;
				after?:s_String;
				before?:s_String;
				first?:s_Int;
				last?:s_Int
			};
		};
		/**
		 * Meta information about the query.
		*/
		_filmsMeta:{
			payload:object__QueryMeta['payload'];
			args?:{
				filter?:inpob_FilmFilter;
				orderBy?:enum_FilmOrderBy;
				skip?:s_Int;
				after?:s_String;
				before?:s_String;
				first?:s_Int;
				last?:s_Int
			};
		};
		/**
		 * Meta information about the query.
		*/
		_speciesMeta:{
			payload:object__QueryMeta['payload'];
			args?:{
				filter?:inpob_SpeciesFilter;
				orderBy?:enum_SpeciesOrderBy;
				skip?:s_Int;
				after?:s_String;
				before?:s_String;
				first?:s_Int;
				last?:s_Int
			};
		};
		/**
		 * Meta information about the query.
		*/
		_starshipsMeta:{
			payload:object__QueryMeta['payload'];
			args?:{
				filter?:inpob_StarshipFilter;
				orderBy?:enum_StarshipOrderBy;
				skip?:s_Int;
				after?:s_String;
				before?:s_String;
				first?:s_Int;
				last?:s_Int
			};
		};
		/**
		 * Meta information about the query.
		*/
		_vehiclesMeta:{
			payload:object__QueryMeta['payload'];
			args?:{
				filter?:inpob_VehicleFilter;
				orderBy?:enum_VehicleOrderBy;
				skip?:s_Int;
				after?:s_String;
				before?:s_String;
				first?:s_Int;
				last?:s_Int
			};
		}
	};
};
export type inpob_PersonFilter = {
		/**
		 * Logical AND on all given filters.
		*/
		AND:inpob_PersonFilter[];
		/**
		 * Logical OR on all given filters.
		*/
		OR:inpob_PersonFilter[];
		birthYear?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		birthYear_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		birthYear_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		birthYear_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		birthYear_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		birthYear_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		birthYear_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		birthYear_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		birthYear_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		birthYear_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		birthYear_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		birthYear_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		birthYear_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		birthYear_not_ends_with?:s_String;
		createdAt?:s_DateTime;
		/**
		 * All values that are not equal to given value.
		*/
		createdAt_not?:s_DateTime;
		/**
		 * All values that are contained in given list.
		*/
		createdAt_in:s_DateTime[];
		/**
		 * All values that are not contained in given list.
		*/
		createdAt_not_in:s_DateTime[];
		/**
		 * All values less than the given value.
		*/
		createdAt_lt?:s_DateTime;
		/**
		 * All values less than or equal the given value.
		*/
		createdAt_lte?:s_DateTime;
		/**
		 * All values greater than the given value.
		*/
		createdAt_gt?:s_DateTime;
		/**
		 * All values greater than or equal the given value.
		*/
		createdAt_gte?:s_DateTime;
		gender?:enum_PERSON_GENDER;
		/**
		 * All values that are not equal to given value.
		*/
		gender_not?:enum_PERSON_GENDER;
		/**
		 * All values that are contained in given list.
		*/
		gender_in:enum_PERSON_GENDER[];
		/**
		 * All values that are not contained in given list.
		*/
		gender_not_in:enum_PERSON_GENDER[];
		height?:s_Int;
		/**
		 * All values that are not equal to given value.
		*/
		height_not?:s_Int;
		/**
		 * All values that are contained in given list.
		*/
		height_in:s_Int[];
		/**
		 * All values that are not contained in given list.
		*/
		height_not_in:s_Int[];
		/**
		 * All values less than the given value.
		*/
		height_lt?:s_Int;
		/**
		 * All values less than or equal the given value.
		*/
		height_lte?:s_Int;
		/**
		 * All values greater than the given value.
		*/
		height_gt?:s_Int;
		/**
		 * All values greater than or equal the given value.
		*/
		height_gte?:s_Int;
		id?:s_ID;
		/**
		 * All values that are not equal to given value.
		*/
		id_not?:s_ID;
		/**
		 * All values that are contained in given list.
		*/
		id_in:s_ID[];
		/**
		 * All values that are not contained in given list.
		*/
		id_not_in:s_ID[];
		/**
		 * All values less than the given value.
		*/
		id_lt?:s_ID;
		/**
		 * All values less than or equal the given value.
		*/
		id_lte?:s_ID;
		/**
		 * All values greater than the given value.
		*/
		id_gt?:s_ID;
		/**
		 * All values greater than or equal the given value.
		*/
		id_gte?:s_ID;
		/**
		 * All values containing the given string.
		*/
		id_contains?:s_ID;
		/**
		 * All values not containing the given string.
		*/
		id_not_contains?:s_ID;
		/**
		 * All values starting with the given string.
		*/
		id_starts_with?:s_ID;
		/**
		 * All values not starting with the given string.
		*/
		id_not_starts_with?:s_ID;
		/**
		 * All values ending with the given string.
		*/
		id_ends_with?:s_ID;
		/**
		 * All values not ending with the given string.
		*/
		id_not_ends_with?:s_ID;
		isPublished?:s_Boolean;
		/**
		 * All values that are not equal to given value.
		*/
		isPublished_not?:s_Boolean;
		mass?:s_Float;
		/**
		 * All values that are not equal to given value.
		*/
		mass_not?:s_Float;
		/**
		 * All values that are contained in given list.
		*/
		mass_in:s_Float[];
		/**
		 * All values that are not contained in given list.
		*/
		mass_not_in:s_Float[];
		/**
		 * All values less than the given value.
		*/
		mass_lt?:s_Float;
		/**
		 * All values less than or equal the given value.
		*/
		mass_lte?:s_Float;
		/**
		 * All values greater than the given value.
		*/
		mass_gt?:s_Float;
		/**
		 * All values greater than or equal the given value.
		*/
		mass_gte?:s_Float;
		name?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		name_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		name_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		name_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		name_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		name_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		name_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		name_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		name_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		name_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		name_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		name_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		name_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		name_not_ends_with?:s_String;
		updatedAt?:s_DateTime;
		/**
		 * All values that are not equal to given value.
		*/
		updatedAt_not?:s_DateTime;
		/**
		 * All values that are contained in given list.
		*/
		updatedAt_in:s_DateTime[];
		/**
		 * All values that are not contained in given list.
		*/
		updatedAt_not_in:s_DateTime[];
		/**
		 * All values less than the given value.
		*/
		updatedAt_lt?:s_DateTime;
		/**
		 * All values less than or equal the given value.
		*/
		updatedAt_lte?:s_DateTime;
		/**
		 * All values greater than the given value.
		*/
		updatedAt_gt?:s_DateTime;
		/**
		 * All values greater than or equal the given value.
		*/
		updatedAt_gte?:s_DateTime;
		films_every?:inpob_FilmFilter;
		films_some?:inpob_FilmFilter;
		films_none?:inpob_FilmFilter;
		homeworld?:inpob_PlanetFilter;
		species_every?:inpob_SpeciesFilter;
		species_some?:inpob_SpeciesFilter;
		species_none?:inpob_SpeciesFilter;
		starships_every?:inpob_StarshipFilter;
		starships_some?:inpob_StarshipFilter;
		starships_none?:inpob_StarshipFilter;
		vehicles_every?:inpob_VehicleFilter;
		vehicles_some?:inpob_VehicleFilter;
		vehicles_none?:inpob_VehicleFilter
	};
export type enum_PersonOrderBy  = 'birthYear_ASC' | 'birthYear_DESC' | 'createdAt_ASC' | 'createdAt_DESC' | 'gender_ASC' | 'gender_DESC' | 'height_ASC' | 'height_DESC' | 'id_ASC' | 'id_DESC' | 'isPublished_ASC' | 'isPublished_DESC' | 'mass_ASC' | 'mass_DESC' | 'name_ASC' | 'name_DESC' | 'updatedAt_ASC' | 'updatedAt_DESC';
/**
 * A Planet is a large mass, planet or planetoid in the Star Wars Universe, at the time of 0 ABY.
*/
export type object_Planet = {
	payload:{
		/**
		 * The climate of this planet.
		*/
		climate:s_String[];
		createdAt:s_DateTime;
		/**
		 * The diameter of this planet in kilometers.
		*/
		diameter?:s_Int;
		films:{
			payload:Arrayed<query["Film"]>['payload'];
			args?:{
				filter?:inpob_FilmFilter;
				orderBy?:enum_FilmOrderBy;
				skip?:s_Int;
				after?:s_String;
				before?:s_String;
				first?:s_Int;
				last?:s_Int
			};
		};
		/**
		 * A number denoting the gravity of this planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
		*/
		gravity?:s_String;
		id:s_ID;
		/**
		 * indicates if the record is published
		*/
		isPublished:s_Boolean;
		/**
		 * The name of the planet
		*/
		name:s_String;
		/**
		 * The number of standard days it takes for this planet to complete a single orbit of its local star.
		*/
		orbitalPeriod?:s_Int;
		/**
		 * The average population of sentient beings inhabiting this planet.
		*/
		population?:s_Float;
		residents:{
			payload:Arrayed<query["Person"]>['payload'];
			args?:{
				filter?:inpob_PersonFilter;
				orderBy?:enum_PersonOrderBy;
				skip?:s_Int;
				after?:s_String;
				before?:s_String;
				first?:s_Int;
				last?:s_Int
			};
		};
		/**
		 * The number of standard hours it takes for this planet to complete a single rotation on its axis.
		*/
		rotationPeriod?:s_Int;
		/**
		 * The percentage of the planet surface that is naturally occurring water or bodies of water.
		*/
		surfaceWater?:s_Float;
		/**
		 * The terrain of this planet.
		*/
		terrain:s_String[];
		updatedAt:s_DateTime;
		/**
		 * Meta information about the query.
		*/
		_filmsMeta:{
			payload:object__QueryMeta['payload'];
			args?:{
				filter?:inpob_FilmFilter;
				orderBy?:enum_FilmOrderBy;
				skip?:s_Int;
				after?:s_String;
				before?:s_String;
				first?:s_Int;
				last?:s_Int
			};
		};
		/**
		 * Meta information about the query.
		*/
		_residentsMeta:{
			payload:object__QueryMeta['payload'];
			args?:{
				filter?:inpob_PersonFilter;
				orderBy?:enum_PersonOrderBy;
				skip?:s_Int;
				after?:s_String;
				before?:s_String;
				first?:s_Int;
				last?:s_Int
			};
		}
	};
};
export type inpob_PlanetFilter = {
		/**
		 * Logical AND on all given filters.
		*/
		AND:inpob_PlanetFilter[];
		/**
		 * Logical OR on all given filters.
		*/
		OR:inpob_PlanetFilter[];
		createdAt?:s_DateTime;
		/**
		 * All values that are not equal to given value.
		*/
		createdAt_not?:s_DateTime;
		/**
		 * All values that are contained in given list.
		*/
		createdAt_in:s_DateTime[];
		/**
		 * All values that are not contained in given list.
		*/
		createdAt_not_in:s_DateTime[];
		/**
		 * All values less than the given value.
		*/
		createdAt_lt?:s_DateTime;
		/**
		 * All values less than or equal the given value.
		*/
		createdAt_lte?:s_DateTime;
		/**
		 * All values greater than the given value.
		*/
		createdAt_gt?:s_DateTime;
		/**
		 * All values greater than or equal the given value.
		*/
		createdAt_gte?:s_DateTime;
		diameter?:s_Int;
		/**
		 * All values that are not equal to given value.
		*/
		diameter_not?:s_Int;
		/**
		 * All values that are contained in given list.
		*/
		diameter_in:s_Int[];
		/**
		 * All values that are not contained in given list.
		*/
		diameter_not_in:s_Int[];
		/**
		 * All values less than the given value.
		*/
		diameter_lt?:s_Int;
		/**
		 * All values less than or equal the given value.
		*/
		diameter_lte?:s_Int;
		/**
		 * All values greater than the given value.
		*/
		diameter_gt?:s_Int;
		/**
		 * All values greater than or equal the given value.
		*/
		diameter_gte?:s_Int;
		gravity?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		gravity_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		gravity_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		gravity_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		gravity_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		gravity_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		gravity_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		gravity_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		gravity_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		gravity_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		gravity_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		gravity_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		gravity_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		gravity_not_ends_with?:s_String;
		id?:s_ID;
		/**
		 * All values that are not equal to given value.
		*/
		id_not?:s_ID;
		/**
		 * All values that are contained in given list.
		*/
		id_in:s_ID[];
		/**
		 * All values that are not contained in given list.
		*/
		id_not_in:s_ID[];
		/**
		 * All values less than the given value.
		*/
		id_lt?:s_ID;
		/**
		 * All values less than or equal the given value.
		*/
		id_lte?:s_ID;
		/**
		 * All values greater than the given value.
		*/
		id_gt?:s_ID;
		/**
		 * All values greater than or equal the given value.
		*/
		id_gte?:s_ID;
		/**
		 * All values containing the given string.
		*/
		id_contains?:s_ID;
		/**
		 * All values not containing the given string.
		*/
		id_not_contains?:s_ID;
		/**
		 * All values starting with the given string.
		*/
		id_starts_with?:s_ID;
		/**
		 * All values not starting with the given string.
		*/
		id_not_starts_with?:s_ID;
		/**
		 * All values ending with the given string.
		*/
		id_ends_with?:s_ID;
		/**
		 * All values not ending with the given string.
		*/
		id_not_ends_with?:s_ID;
		isPublished?:s_Boolean;
		/**
		 * All values that are not equal to given value.
		*/
		isPublished_not?:s_Boolean;
		name?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		name_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		name_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		name_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		name_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		name_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		name_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		name_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		name_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		name_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		name_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		name_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		name_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		name_not_ends_with?:s_String;
		orbitalPeriod?:s_Int;
		/**
		 * All values that are not equal to given value.
		*/
		orbitalPeriod_not?:s_Int;
		/**
		 * All values that are contained in given list.
		*/
		orbitalPeriod_in:s_Int[];
		/**
		 * All values that are not contained in given list.
		*/
		orbitalPeriod_not_in:s_Int[];
		/**
		 * All values less than the given value.
		*/
		orbitalPeriod_lt?:s_Int;
		/**
		 * All values less than or equal the given value.
		*/
		orbitalPeriod_lte?:s_Int;
		/**
		 * All values greater than the given value.
		*/
		orbitalPeriod_gt?:s_Int;
		/**
		 * All values greater than or equal the given value.
		*/
		orbitalPeriod_gte?:s_Int;
		population?:s_Float;
		/**
		 * All values that are not equal to given value.
		*/
		population_not?:s_Float;
		/**
		 * All values that are contained in given list.
		*/
		population_in:s_Float[];
		/**
		 * All values that are not contained in given list.
		*/
		population_not_in:s_Float[];
		/**
		 * All values less than the given value.
		*/
		population_lt?:s_Float;
		/**
		 * All values less than or equal the given value.
		*/
		population_lte?:s_Float;
		/**
		 * All values greater than the given value.
		*/
		population_gt?:s_Float;
		/**
		 * All values greater than or equal the given value.
		*/
		population_gte?:s_Float;
		rotationPeriod?:s_Int;
		/**
		 * All values that are not equal to given value.
		*/
		rotationPeriod_not?:s_Int;
		/**
		 * All values that are contained in given list.
		*/
		rotationPeriod_in:s_Int[];
		/**
		 * All values that are not contained in given list.
		*/
		rotationPeriod_not_in:s_Int[];
		/**
		 * All values less than the given value.
		*/
		rotationPeriod_lt?:s_Int;
		/**
		 * All values less than or equal the given value.
		*/
		rotationPeriod_lte?:s_Int;
		/**
		 * All values greater than the given value.
		*/
		rotationPeriod_gt?:s_Int;
		/**
		 * All values greater than or equal the given value.
		*/
		rotationPeriod_gte?:s_Int;
		surfaceWater?:s_Float;
		/**
		 * All values that are not equal to given value.
		*/
		surfaceWater_not?:s_Float;
		/**
		 * All values that are contained in given list.
		*/
		surfaceWater_in:s_Float[];
		/**
		 * All values that are not contained in given list.
		*/
		surfaceWater_not_in:s_Float[];
		/**
		 * All values less than the given value.
		*/
		surfaceWater_lt?:s_Float;
		/**
		 * All values less than or equal the given value.
		*/
		surfaceWater_lte?:s_Float;
		/**
		 * All values greater than the given value.
		*/
		surfaceWater_gt?:s_Float;
		/**
		 * All values greater than or equal the given value.
		*/
		surfaceWater_gte?:s_Float;
		updatedAt?:s_DateTime;
		/**
		 * All values that are not equal to given value.
		*/
		updatedAt_not?:s_DateTime;
		/**
		 * All values that are contained in given list.
		*/
		updatedAt_in:s_DateTime[];
		/**
		 * All values that are not contained in given list.
		*/
		updatedAt_not_in:s_DateTime[];
		/**
		 * All values less than the given value.
		*/
		updatedAt_lt?:s_DateTime;
		/**
		 * All values less than or equal the given value.
		*/
		updatedAt_lte?:s_DateTime;
		/**
		 * All values greater than the given value.
		*/
		updatedAt_gt?:s_DateTime;
		/**
		 * All values greater than or equal the given value.
		*/
		updatedAt_gte?:s_DateTime;
		films_every?:inpob_FilmFilter;
		films_some?:inpob_FilmFilter;
		films_none?:inpob_FilmFilter;
		residents_every?:inpob_PersonFilter;
		residents_some?:inpob_PersonFilter;
		residents_none?:inpob_PersonFilter
	};
export type enum_PlanetOrderBy  = 'createdAt_ASC' | 'createdAt_DESC' | 'diameter_ASC' | 'diameter_DESC' | 'gravity_ASC' | 'gravity_DESC' | 'id_ASC' | 'id_DESC' | 'isPublished_ASC' | 'isPublished_DESC' | 'name_ASC' | 'name_DESC' | 'orbitalPeriod_ASC' | 'orbitalPeriod_DESC' | 'population_ASC' | 'population_DESC' | 'rotationPeriod_ASC' | 'rotationPeriod_DESC' | 'surfaceWater_ASC' | 'surfaceWater_DESC' | 'updatedAt_ASC' | 'updatedAt_DESC';
/**
 * The eye colors for this species, "UNKNOWN" if not known, null if this species does not typically have eyes.
*/
export type enum_SPECIES_EYE_COLOR  = 'AMBER' | 'BLACK' | 'BLUE' | 'BROWN' | 'GOLD' | 'GREEN' | 'GREY' | 'HAZEL' | 'INDIGO' | 'ORANGE' | 'PINK' | 'RED' | 'SILVER' | 'UNKNOWN' | 'YELLOW' | 'GOLDEN';
/**
 * The hair colors for this species, "UNKNOWN" if not known, null if this species does not typically have hairs.
*/
export type enum_SPECIES_HAIR_COLOR  = 'UNKNOWN' | 'BROWN' | 'WHITE' | 'RED' | 'BLACK' | 'BLONDE';
/**
 * The skin colors for this species, "UNKNOWN" if not known, null if this species does not typically have a skin.
*/
export type enum_SPECIES_SKIN_COLOR  = 'BLUE' | 'BROWN' | 'CAUCASIAN' | 'DARK' | 'GREEN' | 'GREY' | 'MAGENTA' | 'ORANGE' | 'PALE' | 'PALEPINK' | 'PEACH' | 'PINK' | 'PURPLE' | 'RED' | 'TAN' | 'UNKNOWN' | 'WHITE' | 'YELLOW' | 'BLACK' | 'ASIAN' | 'HISPANIC';
/**
 * A Species is a type of person or character within the Star Wars Universe.
*/
export type object_Species = {
	payload:{
		/**
		 * The average height of this species in centimeters.
		*/
		averageHeight?:s_Int;
		/**
		 * The average lifespan of this species in years.
		*/
		averageLifespan?:s_Int;
		/**
		 * The classification of this species, such as "mammal" or "reptile".
		*/
		classification?:s_String;
		createdAt:s_DateTime;
		/**
		 * The designation of this species, such as "sentient".
		*/
		designation?:s_String;
		/**
		 * The eye colors for this species, "UNKNOWN" if not known, null if this species does not typically have eyes.
		*/
		eyeColor:enum_SPECIES_EYE_COLOR[];
		films:{
			payload:Arrayed<query["Film"]>['payload'];
			args?:{
				filter?:inpob_FilmFilter;
				orderBy?:enum_FilmOrderBy;
				skip?:s_Int;
				after?:s_String;
				before?:s_String;
				first?:s_Int;
				last?:s_Int
			};
		};
		/**
		 * The hair colors for this species, "UNKNOWN" if not known, null if this species does not typically have hairs.
		*/
		hairColor:enum_SPECIES_HAIR_COLOR[];
		id:s_ID;
		/**
		 * indicates if the record is published
		*/
		isPublished:s_Boolean;
		/**
		 * The language commonly spoken by this species.
		*/
		language?:s_String;
		/**
		 * The name of this species.
		*/
		name:s_String;
		people:{
			payload:Arrayed<query["Person"]>['payload'];
			args?:{
				filter?:inpob_PersonFilter;
				orderBy?:enum_PersonOrderBy;
				skip?:s_Int;
				after?:s_String;
				before?:s_String;
				first?:s_Int;
				last?:s_Int
			};
		};
		/**
		 * The skin colors for this species, "UNKNOWN" if not known, null if this species does not typically have a skin.
		*/
		skinColor:enum_SPECIES_SKIN_COLOR[];
		updatedAt:s_DateTime;
		/**
		 * Meta information about the query.
		*/
		_filmsMeta:{
			payload:object__QueryMeta['payload'];
			args?:{
				filter?:inpob_FilmFilter;
				orderBy?:enum_FilmOrderBy;
				skip?:s_Int;
				after?:s_String;
				before?:s_String;
				first?:s_Int;
				last?:s_Int
			};
		};
		/**
		 * Meta information about the query.
		*/
		_peopleMeta:{
			payload:object__QueryMeta['payload'];
			args?:{
				filter?:inpob_PersonFilter;
				orderBy?:enum_PersonOrderBy;
				skip?:s_Int;
				after?:s_String;
				before?:s_String;
				first?:s_Int;
				last?:s_Int
			};
		}
	};
};
export type inpob_SpeciesFilter = {
		/**
		 * Logical AND on all given filters.
		*/
		AND:inpob_SpeciesFilter[];
		/**
		 * Logical OR on all given filters.
		*/
		OR:inpob_SpeciesFilter[];
		averageHeight?:s_Int;
		/**
		 * All values that are not equal to given value.
		*/
		averageHeight_not?:s_Int;
		/**
		 * All values that are contained in given list.
		*/
		averageHeight_in:s_Int[];
		/**
		 * All values that are not contained in given list.
		*/
		averageHeight_not_in:s_Int[];
		/**
		 * All values less than the given value.
		*/
		averageHeight_lt?:s_Int;
		/**
		 * All values less than or equal the given value.
		*/
		averageHeight_lte?:s_Int;
		/**
		 * All values greater than the given value.
		*/
		averageHeight_gt?:s_Int;
		/**
		 * All values greater than or equal the given value.
		*/
		averageHeight_gte?:s_Int;
		averageLifespan?:s_Int;
		/**
		 * All values that are not equal to given value.
		*/
		averageLifespan_not?:s_Int;
		/**
		 * All values that are contained in given list.
		*/
		averageLifespan_in:s_Int[];
		/**
		 * All values that are not contained in given list.
		*/
		averageLifespan_not_in:s_Int[];
		/**
		 * All values less than the given value.
		*/
		averageLifespan_lt?:s_Int;
		/**
		 * All values less than or equal the given value.
		*/
		averageLifespan_lte?:s_Int;
		/**
		 * All values greater than the given value.
		*/
		averageLifespan_gt?:s_Int;
		/**
		 * All values greater than or equal the given value.
		*/
		averageLifespan_gte?:s_Int;
		classification?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		classification_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		classification_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		classification_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		classification_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		classification_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		classification_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		classification_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		classification_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		classification_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		classification_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		classification_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		classification_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		classification_not_ends_with?:s_String;
		createdAt?:s_DateTime;
		/**
		 * All values that are not equal to given value.
		*/
		createdAt_not?:s_DateTime;
		/**
		 * All values that are contained in given list.
		*/
		createdAt_in:s_DateTime[];
		/**
		 * All values that are not contained in given list.
		*/
		createdAt_not_in:s_DateTime[];
		/**
		 * All values less than the given value.
		*/
		createdAt_lt?:s_DateTime;
		/**
		 * All values less than or equal the given value.
		*/
		createdAt_lte?:s_DateTime;
		/**
		 * All values greater than the given value.
		*/
		createdAt_gt?:s_DateTime;
		/**
		 * All values greater than or equal the given value.
		*/
		createdAt_gte?:s_DateTime;
		designation?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		designation_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		designation_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		designation_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		designation_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		designation_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		designation_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		designation_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		designation_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		designation_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		designation_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		designation_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		designation_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		designation_not_ends_with?:s_String;
		id?:s_ID;
		/**
		 * All values that are not equal to given value.
		*/
		id_not?:s_ID;
		/**
		 * All values that are contained in given list.
		*/
		id_in:s_ID[];
		/**
		 * All values that are not contained in given list.
		*/
		id_not_in:s_ID[];
		/**
		 * All values less than the given value.
		*/
		id_lt?:s_ID;
		/**
		 * All values less than or equal the given value.
		*/
		id_lte?:s_ID;
		/**
		 * All values greater than the given value.
		*/
		id_gt?:s_ID;
		/**
		 * All values greater than or equal the given value.
		*/
		id_gte?:s_ID;
		/**
		 * All values containing the given string.
		*/
		id_contains?:s_ID;
		/**
		 * All values not containing the given string.
		*/
		id_not_contains?:s_ID;
		/**
		 * All values starting with the given string.
		*/
		id_starts_with?:s_ID;
		/**
		 * All values not starting with the given string.
		*/
		id_not_starts_with?:s_ID;
		/**
		 * All values ending with the given string.
		*/
		id_ends_with?:s_ID;
		/**
		 * All values not ending with the given string.
		*/
		id_not_ends_with?:s_ID;
		isPublished?:s_Boolean;
		/**
		 * All values that are not equal to given value.
		*/
		isPublished_not?:s_Boolean;
		language?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		language_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		language_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		language_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		language_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		language_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		language_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		language_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		language_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		language_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		language_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		language_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		language_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		language_not_ends_with?:s_String;
		name?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		name_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		name_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		name_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		name_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		name_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		name_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		name_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		name_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		name_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		name_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		name_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		name_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		name_not_ends_with?:s_String;
		updatedAt?:s_DateTime;
		/**
		 * All values that are not equal to given value.
		*/
		updatedAt_not?:s_DateTime;
		/**
		 * All values that are contained in given list.
		*/
		updatedAt_in:s_DateTime[];
		/**
		 * All values that are not contained in given list.
		*/
		updatedAt_not_in:s_DateTime[];
		/**
		 * All values less than the given value.
		*/
		updatedAt_lt?:s_DateTime;
		/**
		 * All values less than or equal the given value.
		*/
		updatedAt_lte?:s_DateTime;
		/**
		 * All values greater than the given value.
		*/
		updatedAt_gt?:s_DateTime;
		/**
		 * All values greater than or equal the given value.
		*/
		updatedAt_gte?:s_DateTime;
		films_every?:inpob_FilmFilter;
		films_some?:inpob_FilmFilter;
		films_none?:inpob_FilmFilter;
		people_every?:inpob_PersonFilter;
		people_some?:inpob_PersonFilter;
		people_none?:inpob_PersonFilter
	};
export type enum_SpeciesOrderBy  = 'averageHeight_ASC' | 'averageHeight_DESC' | 'averageLifespan_ASC' | 'averageLifespan_DESC' | 'classification_ASC' | 'classification_DESC' | 'createdAt_ASC' | 'createdAt_DESC' | 'designation_ASC' | 'designation_DESC' | 'id_ASC' | 'id_DESC' | 'isPublished_ASC' | 'isPublished_DESC' | 'language_ASC' | 'language_DESC' | 'name_ASC' | 'name_DESC' | 'updatedAt_ASC' | 'updatedAt_DESC';
/**
 * A Starship is a single transport craft that has hyperdrive capability.
*/
export type object_Starship = {
	payload:{
		/**
		 * The maximum number of kilograms that this starship can transport.
		*/
		cargoCapacity?:s_Float;
		/**
		 * The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation"
		*/
		class?:s_String;
		/**
		 * The maximum length of time that this starship can provide consumables for its entire crew without having to resupply.
		*/
		consumables?:s_String;
		/**
		 *  The cost of this starship new, in galactic credits.
		*/
		costInCredits?:s_Float;
		createdAt:s_DateTime;
		/**
		 * The number of personnel needed to run or pilot this starship.
		*/
		crew?:s_Int;
		films:{
			payload:Arrayed<query["Film"]>['payload'];
			args?:{
				filter?:inpob_FilmFilter;
				orderBy?:enum_FilmOrderBy;
				skip?:s_Int;
				after?:s_String;
				before?:s_String;
				first?:s_Int;
				last?:s_Int
			};
		};
		/**
		 * The class of this starships hyperdrive.
		*/
		hyperdriveRating?:s_Float;
		id:s_ID;
		/**
		 * indicates if the record is published
		*/
		isPublished:s_Boolean;
		/**
		 * The length of this starship in meters.
		*/
		length?:s_Float;
		/**
		 * The manufacturer of this starship.
		*/
		manufacturer:s_String[];
		/**
		 *  The maximum speed of this starship in the atmosphere. null if this starship is incapable of atmospheric flight.
		*/
		maxAtmospheringSpeed?:s_Int;
		/**
		 * The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe.
		*/
		mglt?:s_Int;
		/**
		 * The name of this starship. The common name, such as "Death Star".
		*/
		name:s_String;
		/**
		 *  The number of non-essential people this starship can transport.
		*/
		passengers?:s_Int;
		pilots:{
			payload:Arrayed<query["Person"]>['payload'];
			args?:{
				filter?:inpob_PersonFilter;
				orderBy?:enum_PersonOrderBy;
				skip?:s_Int;
				after?:s_String;
				before?:s_String;
				first?:s_Int;
				last?:s_Int
			};
		};
		updatedAt:s_DateTime;
		/**
		 * Meta information about the query.
		*/
		_filmsMeta:{
			payload:object__QueryMeta['payload'];
			args?:{
				filter?:inpob_FilmFilter;
				orderBy?:enum_FilmOrderBy;
				skip?:s_Int;
				after?:s_String;
				before?:s_String;
				first?:s_Int;
				last?:s_Int
			};
		};
		/**
		 * Meta information about the query.
		*/
		_pilotsMeta:{
			payload:object__QueryMeta['payload'];
			args?:{
				filter?:inpob_PersonFilter;
				orderBy?:enum_PersonOrderBy;
				skip?:s_Int;
				after?:s_String;
				before?:s_String;
				first?:s_Int;
				last?:s_Int
			};
		}
	};
};
export type inpob_StarshipFilter = {
		/**
		 * Logical AND on all given filters.
		*/
		AND:inpob_StarshipFilter[];
		/**
		 * Logical OR on all given filters.
		*/
		OR:inpob_StarshipFilter[];
		cargoCapacity?:s_Float;
		/**
		 * All values that are not equal to given value.
		*/
		cargoCapacity_not?:s_Float;
		/**
		 * All values that are contained in given list.
		*/
		cargoCapacity_in:s_Float[];
		/**
		 * All values that are not contained in given list.
		*/
		cargoCapacity_not_in:s_Float[];
		/**
		 * All values less than the given value.
		*/
		cargoCapacity_lt?:s_Float;
		/**
		 * All values less than or equal the given value.
		*/
		cargoCapacity_lte?:s_Float;
		/**
		 * All values greater than the given value.
		*/
		cargoCapacity_gt?:s_Float;
		/**
		 * All values greater than or equal the given value.
		*/
		cargoCapacity_gte?:s_Float;
		class?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		class_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		class_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		class_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		class_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		class_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		class_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		class_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		class_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		class_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		class_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		class_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		class_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		class_not_ends_with?:s_String;
		consumables?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		consumables_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		consumables_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		consumables_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		consumables_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		consumables_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		consumables_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		consumables_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		consumables_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		consumables_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		consumables_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		consumables_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		consumables_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		consumables_not_ends_with?:s_String;
		costInCredits?:s_Float;
		/**
		 * All values that are not equal to given value.
		*/
		costInCredits_not?:s_Float;
		/**
		 * All values that are contained in given list.
		*/
		costInCredits_in:s_Float[];
		/**
		 * All values that are not contained in given list.
		*/
		costInCredits_not_in:s_Float[];
		/**
		 * All values less than the given value.
		*/
		costInCredits_lt?:s_Float;
		/**
		 * All values less than or equal the given value.
		*/
		costInCredits_lte?:s_Float;
		/**
		 * All values greater than the given value.
		*/
		costInCredits_gt?:s_Float;
		/**
		 * All values greater than or equal the given value.
		*/
		costInCredits_gte?:s_Float;
		createdAt?:s_DateTime;
		/**
		 * All values that are not equal to given value.
		*/
		createdAt_not?:s_DateTime;
		/**
		 * All values that are contained in given list.
		*/
		createdAt_in:s_DateTime[];
		/**
		 * All values that are not contained in given list.
		*/
		createdAt_not_in:s_DateTime[];
		/**
		 * All values less than the given value.
		*/
		createdAt_lt?:s_DateTime;
		/**
		 * All values less than or equal the given value.
		*/
		createdAt_lte?:s_DateTime;
		/**
		 * All values greater than the given value.
		*/
		createdAt_gt?:s_DateTime;
		/**
		 * All values greater than or equal the given value.
		*/
		createdAt_gte?:s_DateTime;
		crew?:s_Int;
		/**
		 * All values that are not equal to given value.
		*/
		crew_not?:s_Int;
		/**
		 * All values that are contained in given list.
		*/
		crew_in:s_Int[];
		/**
		 * All values that are not contained in given list.
		*/
		crew_not_in:s_Int[];
		/**
		 * All values less than the given value.
		*/
		crew_lt?:s_Int;
		/**
		 * All values less than or equal the given value.
		*/
		crew_lte?:s_Int;
		/**
		 * All values greater than the given value.
		*/
		crew_gt?:s_Int;
		/**
		 * All values greater than or equal the given value.
		*/
		crew_gte?:s_Int;
		hyperdriveRating?:s_Float;
		/**
		 * All values that are not equal to given value.
		*/
		hyperdriveRating_not?:s_Float;
		/**
		 * All values that are contained in given list.
		*/
		hyperdriveRating_in:s_Float[];
		/**
		 * All values that are not contained in given list.
		*/
		hyperdriveRating_not_in:s_Float[];
		/**
		 * All values less than the given value.
		*/
		hyperdriveRating_lt?:s_Float;
		/**
		 * All values less than or equal the given value.
		*/
		hyperdriveRating_lte?:s_Float;
		/**
		 * All values greater than the given value.
		*/
		hyperdriveRating_gt?:s_Float;
		/**
		 * All values greater than or equal the given value.
		*/
		hyperdriveRating_gte?:s_Float;
		id?:s_ID;
		/**
		 * All values that are not equal to given value.
		*/
		id_not?:s_ID;
		/**
		 * All values that are contained in given list.
		*/
		id_in:s_ID[];
		/**
		 * All values that are not contained in given list.
		*/
		id_not_in:s_ID[];
		/**
		 * All values less than the given value.
		*/
		id_lt?:s_ID;
		/**
		 * All values less than or equal the given value.
		*/
		id_lte?:s_ID;
		/**
		 * All values greater than the given value.
		*/
		id_gt?:s_ID;
		/**
		 * All values greater than or equal the given value.
		*/
		id_gte?:s_ID;
		/**
		 * All values containing the given string.
		*/
		id_contains?:s_ID;
		/**
		 * All values not containing the given string.
		*/
		id_not_contains?:s_ID;
		/**
		 * All values starting with the given string.
		*/
		id_starts_with?:s_ID;
		/**
		 * All values not starting with the given string.
		*/
		id_not_starts_with?:s_ID;
		/**
		 * All values ending with the given string.
		*/
		id_ends_with?:s_ID;
		/**
		 * All values not ending with the given string.
		*/
		id_not_ends_with?:s_ID;
		isPublished?:s_Boolean;
		/**
		 * All values that are not equal to given value.
		*/
		isPublished_not?:s_Boolean;
		length?:s_Float;
		/**
		 * All values that are not equal to given value.
		*/
		length_not?:s_Float;
		/**
		 * All values that are contained in given list.
		*/
		length_in:s_Float[];
		/**
		 * All values that are not contained in given list.
		*/
		length_not_in:s_Float[];
		/**
		 * All values less than the given value.
		*/
		length_lt?:s_Float;
		/**
		 * All values less than or equal the given value.
		*/
		length_lte?:s_Float;
		/**
		 * All values greater than the given value.
		*/
		length_gt?:s_Float;
		/**
		 * All values greater than or equal the given value.
		*/
		length_gte?:s_Float;
		maxAtmospheringSpeed?:s_Int;
		/**
		 * All values that are not equal to given value.
		*/
		maxAtmospheringSpeed_not?:s_Int;
		/**
		 * All values that are contained in given list.
		*/
		maxAtmospheringSpeed_in:s_Int[];
		/**
		 * All values that are not contained in given list.
		*/
		maxAtmospheringSpeed_not_in:s_Int[];
		/**
		 * All values less than the given value.
		*/
		maxAtmospheringSpeed_lt?:s_Int;
		/**
		 * All values less than or equal the given value.
		*/
		maxAtmospheringSpeed_lte?:s_Int;
		/**
		 * All values greater than the given value.
		*/
		maxAtmospheringSpeed_gt?:s_Int;
		/**
		 * All values greater than or equal the given value.
		*/
		maxAtmospheringSpeed_gte?:s_Int;
		mglt?:s_Int;
		/**
		 * All values that are not equal to given value.
		*/
		mglt_not?:s_Int;
		/**
		 * All values that are contained in given list.
		*/
		mglt_in:s_Int[];
		/**
		 * All values that are not contained in given list.
		*/
		mglt_not_in:s_Int[];
		/**
		 * All values less than the given value.
		*/
		mglt_lt?:s_Int;
		/**
		 * All values less than or equal the given value.
		*/
		mglt_lte?:s_Int;
		/**
		 * All values greater than the given value.
		*/
		mglt_gt?:s_Int;
		/**
		 * All values greater than or equal the given value.
		*/
		mglt_gte?:s_Int;
		name?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		name_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		name_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		name_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		name_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		name_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		name_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		name_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		name_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		name_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		name_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		name_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		name_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		name_not_ends_with?:s_String;
		passengers?:s_Int;
		/**
		 * All values that are not equal to given value.
		*/
		passengers_not?:s_Int;
		/**
		 * All values that are contained in given list.
		*/
		passengers_in:s_Int[];
		/**
		 * All values that are not contained in given list.
		*/
		passengers_not_in:s_Int[];
		/**
		 * All values less than the given value.
		*/
		passengers_lt?:s_Int;
		/**
		 * All values less than or equal the given value.
		*/
		passengers_lte?:s_Int;
		/**
		 * All values greater than the given value.
		*/
		passengers_gt?:s_Int;
		/**
		 * All values greater than or equal the given value.
		*/
		passengers_gte?:s_Int;
		updatedAt?:s_DateTime;
		/**
		 * All values that are not equal to given value.
		*/
		updatedAt_not?:s_DateTime;
		/**
		 * All values that are contained in given list.
		*/
		updatedAt_in:s_DateTime[];
		/**
		 * All values that are not contained in given list.
		*/
		updatedAt_not_in:s_DateTime[];
		/**
		 * All values less than the given value.
		*/
		updatedAt_lt?:s_DateTime;
		/**
		 * All values less than or equal the given value.
		*/
		updatedAt_lte?:s_DateTime;
		/**
		 * All values greater than the given value.
		*/
		updatedAt_gt?:s_DateTime;
		/**
		 * All values greater than or equal the given value.
		*/
		updatedAt_gte?:s_DateTime;
		films_every?:inpob_FilmFilter;
		films_some?:inpob_FilmFilter;
		films_none?:inpob_FilmFilter;
		pilots_every?:inpob_PersonFilter;
		pilots_some?:inpob_PersonFilter;
		pilots_none?:inpob_PersonFilter
	};
export type enum_StarshipOrderBy  = 'cargoCapacity_ASC' | 'cargoCapacity_DESC' | 'class_ASC' | 'class_DESC' | 'consumables_ASC' | 'consumables_DESC' | 'costInCredits_ASC' | 'costInCredits_DESC' | 'createdAt_ASC' | 'createdAt_DESC' | 'crew_ASC' | 'crew_DESC' | 'hyperdriveRating_ASC' | 'hyperdriveRating_DESC' | 'id_ASC' | 'id_DESC' | 'isPublished_ASC' | 'isPublished_DESC' | 'length_ASC' | 'length_DESC' | 'maxAtmospheringSpeed_ASC' | 'maxAtmospheringSpeed_DESC' | 'mglt_ASC' | 'mglt_DESC' | 'name_ASC' | 'name_DESC' | 'passengers_ASC' | 'passengers_DESC' | 'updatedAt_ASC' | 'updatedAt_DESC';
/**
 * A Vehicle is a single transport craft that does not have hyperdrive capability.
*/
export type object_Vehicle = {
	payload:{
		/**
		 * The maximum number of kilograms that this vehicle can transport.
		*/
		cargoCapacity?:s_Int;
		/**
		 *  The class of this vehicle, such as "Wheeled" or "Repulsorcraft".
		*/
		class?:s_String;
		/**
		 * The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply.
		*/
		consumables?:s_String;
		/**
		 * The cost of this vehicle new, in Galactic Credits.
		*/
		costInCredits?:s_Int;
		createdAt:s_DateTime;
		/**
		 * The number of personnel needed to run or pilot this vehicle.
		*/
		crew?:s_Int;
		films:{
			payload:Arrayed<query["Film"]>['payload'];
			args?:{
				filter?:inpob_FilmFilter;
				orderBy?:enum_FilmOrderBy;
				skip?:s_Int;
				after?:s_String;
				before?:s_String;
				first?:s_Int;
				last?:s_Int
			};
		};
		id:s_ID;
		/**
		 * indicates if the record is published
		*/
		isPublished:s_Boolean;
		/**
		 *  The length of this vehicle in meters.
		*/
		length?:s_Float;
		/**
		 * The manufacturer of this vehicle.
		*/
		manufacturer:s_String[];
		/**
		 * The maximum speed of this vehicle in the atmosphere.
		*/
		maxAtmospheringSpeed?:s_Int;
		/**
		 * The model or official name of this vehicle. Such as "All-Terrain Attack Transport".
		*/
		model?:s_String;
		/**
		 * The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike".
		*/
		name:s_String;
		/**
		 * The number of non-essential people this vehicle can transport.
		*/
		passengers?:s_Int;
		pilots:{
			payload:Arrayed<query["Person"]>['payload'];
			args?:{
				filter?:inpob_PersonFilter;
				orderBy?:enum_PersonOrderBy;
				skip?:s_Int;
				after?:s_String;
				before?:s_String;
				first?:s_Int;
				last?:s_Int
			};
		};
		updatedAt:s_DateTime;
		/**
		 * Meta information about the query.
		*/
		_filmsMeta:{
			payload:object__QueryMeta['payload'];
			args?:{
				filter?:inpob_FilmFilter;
				orderBy?:enum_FilmOrderBy;
				skip?:s_Int;
				after?:s_String;
				before?:s_String;
				first?:s_Int;
				last?:s_Int
			};
		};
		/**
		 * Meta information about the query.
		*/
		_pilotsMeta:{
			payload:object__QueryMeta['payload'];
			args?:{
				filter?:inpob_PersonFilter;
				orderBy?:enum_PersonOrderBy;
				skip?:s_Int;
				after?:s_String;
				before?:s_String;
				first?:s_Int;
				last?:s_Int
			};
		}
	};
};
export type inpob_VehicleFilter = {
		/**
		 * Logical AND on all given filters.
		*/
		AND:inpob_VehicleFilter[];
		/**
		 * Logical OR on all given filters.
		*/
		OR:inpob_VehicleFilter[];
		cargoCapacity?:s_Int;
		/**
		 * All values that are not equal to given value.
		*/
		cargoCapacity_not?:s_Int;
		/**
		 * All values that are contained in given list.
		*/
		cargoCapacity_in:s_Int[];
		/**
		 * All values that are not contained in given list.
		*/
		cargoCapacity_not_in:s_Int[];
		/**
		 * All values less than the given value.
		*/
		cargoCapacity_lt?:s_Int;
		/**
		 * All values less than or equal the given value.
		*/
		cargoCapacity_lte?:s_Int;
		/**
		 * All values greater than the given value.
		*/
		cargoCapacity_gt?:s_Int;
		/**
		 * All values greater than or equal the given value.
		*/
		cargoCapacity_gte?:s_Int;
		class?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		class_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		class_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		class_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		class_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		class_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		class_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		class_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		class_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		class_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		class_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		class_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		class_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		class_not_ends_with?:s_String;
		consumables?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		consumables_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		consumables_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		consumables_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		consumables_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		consumables_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		consumables_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		consumables_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		consumables_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		consumables_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		consumables_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		consumables_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		consumables_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		consumables_not_ends_with?:s_String;
		costInCredits?:s_Int;
		/**
		 * All values that are not equal to given value.
		*/
		costInCredits_not?:s_Int;
		/**
		 * All values that are contained in given list.
		*/
		costInCredits_in:s_Int[];
		/**
		 * All values that are not contained in given list.
		*/
		costInCredits_not_in:s_Int[];
		/**
		 * All values less than the given value.
		*/
		costInCredits_lt?:s_Int;
		/**
		 * All values less than or equal the given value.
		*/
		costInCredits_lte?:s_Int;
		/**
		 * All values greater than the given value.
		*/
		costInCredits_gt?:s_Int;
		/**
		 * All values greater than or equal the given value.
		*/
		costInCredits_gte?:s_Int;
		createdAt?:s_DateTime;
		/**
		 * All values that are not equal to given value.
		*/
		createdAt_not?:s_DateTime;
		/**
		 * All values that are contained in given list.
		*/
		createdAt_in:s_DateTime[];
		/**
		 * All values that are not contained in given list.
		*/
		createdAt_not_in:s_DateTime[];
		/**
		 * All values less than the given value.
		*/
		createdAt_lt?:s_DateTime;
		/**
		 * All values less than or equal the given value.
		*/
		createdAt_lte?:s_DateTime;
		/**
		 * All values greater than the given value.
		*/
		createdAt_gt?:s_DateTime;
		/**
		 * All values greater than or equal the given value.
		*/
		createdAt_gte?:s_DateTime;
		crew?:s_Int;
		/**
		 * All values that are not equal to given value.
		*/
		crew_not?:s_Int;
		/**
		 * All values that are contained in given list.
		*/
		crew_in:s_Int[];
		/**
		 * All values that are not contained in given list.
		*/
		crew_not_in:s_Int[];
		/**
		 * All values less than the given value.
		*/
		crew_lt?:s_Int;
		/**
		 * All values less than or equal the given value.
		*/
		crew_lte?:s_Int;
		/**
		 * All values greater than the given value.
		*/
		crew_gt?:s_Int;
		/**
		 * All values greater than or equal the given value.
		*/
		crew_gte?:s_Int;
		id?:s_ID;
		/**
		 * All values that are not equal to given value.
		*/
		id_not?:s_ID;
		/**
		 * All values that are contained in given list.
		*/
		id_in:s_ID[];
		/**
		 * All values that are not contained in given list.
		*/
		id_not_in:s_ID[];
		/**
		 * All values less than the given value.
		*/
		id_lt?:s_ID;
		/**
		 * All values less than or equal the given value.
		*/
		id_lte?:s_ID;
		/**
		 * All values greater than the given value.
		*/
		id_gt?:s_ID;
		/**
		 * All values greater than or equal the given value.
		*/
		id_gte?:s_ID;
		/**
		 * All values containing the given string.
		*/
		id_contains?:s_ID;
		/**
		 * All values not containing the given string.
		*/
		id_not_contains?:s_ID;
		/**
		 * All values starting with the given string.
		*/
		id_starts_with?:s_ID;
		/**
		 * All values not starting with the given string.
		*/
		id_not_starts_with?:s_ID;
		/**
		 * All values ending with the given string.
		*/
		id_ends_with?:s_ID;
		/**
		 * All values not ending with the given string.
		*/
		id_not_ends_with?:s_ID;
		isPublished?:s_Boolean;
		/**
		 * All values that are not equal to given value.
		*/
		isPublished_not?:s_Boolean;
		length?:s_Float;
		/**
		 * All values that are not equal to given value.
		*/
		length_not?:s_Float;
		/**
		 * All values that are contained in given list.
		*/
		length_in:s_Float[];
		/**
		 * All values that are not contained in given list.
		*/
		length_not_in:s_Float[];
		/**
		 * All values less than the given value.
		*/
		length_lt?:s_Float;
		/**
		 * All values less than or equal the given value.
		*/
		length_lte?:s_Float;
		/**
		 * All values greater than the given value.
		*/
		length_gt?:s_Float;
		/**
		 * All values greater than or equal the given value.
		*/
		length_gte?:s_Float;
		maxAtmospheringSpeed?:s_Int;
		/**
		 * All values that are not equal to given value.
		*/
		maxAtmospheringSpeed_not?:s_Int;
		/**
		 * All values that are contained in given list.
		*/
		maxAtmospheringSpeed_in:s_Int[];
		/**
		 * All values that are not contained in given list.
		*/
		maxAtmospheringSpeed_not_in:s_Int[];
		/**
		 * All values less than the given value.
		*/
		maxAtmospheringSpeed_lt?:s_Int;
		/**
		 * All values less than or equal the given value.
		*/
		maxAtmospheringSpeed_lte?:s_Int;
		/**
		 * All values greater than the given value.
		*/
		maxAtmospheringSpeed_gt?:s_Int;
		/**
		 * All values greater than or equal the given value.
		*/
		maxAtmospheringSpeed_gte?:s_Int;
		model?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		model_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		model_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		model_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		model_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		model_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		model_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		model_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		model_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		model_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		model_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		model_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		model_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		model_not_ends_with?:s_String;
		name?:s_String;
		/**
		 * All values that are not equal to given value.
		*/
		name_not?:s_String;
		/**
		 * All values that are contained in given list.
		*/
		name_in:s_String[];
		/**
		 * All values that are not contained in given list.
		*/
		name_not_in:s_String[];
		/**
		 * All values less than the given value.
		*/
		name_lt?:s_String;
		/**
		 * All values less than or equal the given value.
		*/
		name_lte?:s_String;
		/**
		 * All values greater than the given value.
		*/
		name_gt?:s_String;
		/**
		 * All values greater than or equal the given value.
		*/
		name_gte?:s_String;
		/**
		 * All values containing the given string.
		*/
		name_contains?:s_String;
		/**
		 * All values not containing the given string.
		*/
		name_not_contains?:s_String;
		/**
		 * All values starting with the given string.
		*/
		name_starts_with?:s_String;
		/**
		 * All values not starting with the given string.
		*/
		name_not_starts_with?:s_String;
		/**
		 * All values ending with the given string.
		*/
		name_ends_with?:s_String;
		/**
		 * All values not ending with the given string.
		*/
		name_not_ends_with?:s_String;
		passengers?:s_Int;
		/**
		 * All values that are not equal to given value.
		*/
		passengers_not?:s_Int;
		/**
		 * All values that are contained in given list.
		*/
		passengers_in:s_Int[];
		/**
		 * All values that are not contained in given list.
		*/
		passengers_not_in:s_Int[];
		/**
		 * All values less than the given value.
		*/
		passengers_lt?:s_Int;
		/**
		 * All values less than or equal the given value.
		*/
		passengers_lte?:s_Int;
		/**
		 * All values greater than the given value.
		*/
		passengers_gt?:s_Int;
		/**
		 * All values greater than or equal the given value.
		*/
		passengers_gte?:s_Int;
		updatedAt?:s_DateTime;
		/**
		 * All values that are not equal to given value.
		*/
		updatedAt_not?:s_DateTime;
		/**
		 * All values that are contained in given list.
		*/
		updatedAt_in:s_DateTime[];
		/**
		 * All values that are not contained in given list.
		*/
		updatedAt_not_in:s_DateTime[];
		/**
		 * All values less than the given value.
		*/
		updatedAt_lt?:s_DateTime;
		/**
		 * All values less than or equal the given value.
		*/
		updatedAt_lte?:s_DateTime;
		/**
		 * All values greater than the given value.
		*/
		updatedAt_gt?:s_DateTime;
		/**
		 * All values greater than or equal the given value.
		*/
		updatedAt_gte?:s_DateTime;
		films_every?:inpob_FilmFilter;
		films_some?:inpob_FilmFilter;
		films_none?:inpob_FilmFilter;
		pilots_every?:inpob_PersonFilter;
		pilots_some?:inpob_PersonFilter;
		pilots_none?:inpob_PersonFilter
	};
export type enum_VehicleOrderBy  = 'cargoCapacity_ASC' | 'cargoCapacity_DESC' | 'class_ASC' | 'class_DESC' | 'consumables_ASC' | 'consumables_DESC' | 'costInCredits_ASC' | 'costInCredits_DESC' | 'createdAt_ASC' | 'createdAt_DESC' | 'crew_ASC' | 'crew_DESC' | 'id_ASC' | 'id_DESC' | 'isPublished_ASC' | 'isPublished_DESC' | 'length_ASC' | 'length_DESC' | 'maxAtmospheringSpeed_ASC' | 'maxAtmospheringSpeed_DESC' | 'model_ASC' | 'model_DESC' | 'name_ASC' | 'name_DESC' | 'passengers_ASC' | 'passengers_DESC' | 'updatedAt_ASC' | 'updatedAt_DESC';
/**
 * Meta information about the query.
*/
export type object__QueryMeta = {
	payload:{
		count:s_Int
	};
};
/**
 * A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL’s execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.
*/
export type object___Directive = {
	payload:{
		name:s_String;
		description?:s_String;
		locations:enum___DirectiveLocation[];
		args:Arrayed<object___InputValue>
	};
};
/**
 * A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.
*/
export type enum___DirectiveLocation  = 'QUERY' | 'MUTATION' | 'SUBSCRIPTION' | 'FIELD' | 'FRAGMENT_DEFINITION' | 'FRAGMENT_SPREAD' | 'INLINE_FRAGMENT' | 'SCHEMA' | 'SCALAR' | 'OBJECT' | 'FIELD_DEFINITION' | 'ARGUMENT_DEFINITION' | 'INTERFACE' | 'UNION' | 'ENUM' | 'ENUM_VALUE' | 'INPUT_OBJECT' | 'INPUT_FIELD_DEFINITION';
/**
 * One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.
*/
export type object___EnumValue = {
	payload:{
		name:s_String;
		description?:s_String;
		isDeprecated:s_Boolean;
		deprecationReason?:s_String
	};
};
/**
 * Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.
*/
export type object___Field = {
	payload:{
		name:s_String;
		description?:s_String;
		args:Arrayed<object___InputValue>;
		type:object___Type;
		isDeprecated:s_Boolean;
		deprecationReason?:s_String
	};
};
/**
 * Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.
*/
export type object___InputValue = {
	payload:{
		name:s_String;
		description?:s_String;
		type:object___Type;
		/**
		 * A GraphQL-formatted string representing the default value for this input value.
		*/
		defaultValue?:s_String
	};
};
/**
 * A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.
*/
export type object___Schema = {
	payload:{
		/**
		 * A list of all types supported by this server.
		*/
		types:Arrayed<object___Type>;
		/**
		 * The type that query operations will be rooted at.
		*/
		queryType:object___Type;
		/**
		 * If this server supports mutation, the type that mutation operations will be rooted at.
		*/
		mutationType?:object___Type;
		/**
		 * If this server support subscription, the type that subscription operations will be rooted at.
		*/
		subscriptionType?:object___Type;
		/**
		 * A list of all directives supported by this server.
		*/
		directives:Arrayed<object___Directive>
	};
};
/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.

Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name and description, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
*/
export type object___Type = {
	payload:{
		kind:enum___TypeKind;
		name?:s_String;
		description?:s_String;
		fields:{
			payload:Arrayed<object___Field>['payload'];
			args?:{
				includeDeprecated?:s_Boolean
			};
		};
		interfaces:Arrayed<object___Type>;
		possibleTypes:Arrayed<object___Type>;
		enumValues:{
			payload:Arrayed<object___EnumValue>['payload'];
			args?:{
				includeDeprecated?:s_Boolean
			};
		};
		inputFields:Arrayed<object___InputValue>;
		ofType?:object___Type
	};
};
/**
 * An enum describing what kind of type a given `__Type` is.
*/
export type enum___TypeKind  = 'SCALAR' | 'OBJECT' | 'INTERFACE' | 'UNION' | 'ENUM' | 'INPUT_OBJECT' | 'LIST' | 'NON_NULL';
/**
 * The `Boolean` scalar type represents `true` or `false`.
*/
export type s_Boolean = boolean;
/**
 * The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point).
*/
export type s_Float = number;
/**
 * The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type s_ID = string;
/**
 * The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type s_Int = number;
/**
 * The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type s_String = string;
/**
 * END OF types DEFINITIONS
*/


/**
 * END OF swapi
*/


/**
 * Main entry point for GraphiosTs. All queries, mutations and subscriptions are represented here.
*/
export default interface swapiGraphiosTs{

	query:query;
	mutation:mutation;
	subscription:subscription;
}

