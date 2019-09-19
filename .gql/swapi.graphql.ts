export namespace swapi{
type Arrayed<T> = T extends {payload:any}?{[K in keyof T]: K extends 'payload'?T[K][]:T[K]}:T[];
	/**
	 * swapi: GraphiosTs TypeScript definitions
	*/


	/**
	 * queryType DEFINITIONS
	*/


	 export type query = {
		allAssets:{
			payload:Arrayed<Asset>['payload'];
			args?:{
				filter:AssetFilter;
				orderBy:AssetOrderBy;
				skip:scalar_Int;
				after:scalar_String;
				before:scalar_String;
				first:scalar_Int;
				last:scalar_Int
			};
		};
		allFilms:{
			payload:Arrayed<Film>['payload'];
			args?:{
				filter:FilmFilter;
				orderBy:FilmOrderBy;
				skip:scalar_Int;
				after:scalar_String;
				before:scalar_String;
				first:scalar_Int;
				last:scalar_Int
			};
		};
		allPersons:{
			payload:Arrayed<Person>['payload'];
			args?:{
				filter:PersonFilter;
				orderBy:PersonOrderBy;
				skip:scalar_Int;
				after:scalar_String;
				before:scalar_String;
				first:scalar_Int;
				last:scalar_Int
			};
		};
		allPlanets:{
			payload:Arrayed<Planet>['payload'];
			args?:{
				filter:PlanetFilter;
				orderBy:PlanetOrderBy;
				skip:scalar_Int;
				after:scalar_String;
				before:scalar_String;
				first:scalar_Int;
				last:scalar_Int
			};
		};
		allSpecies:{
			payload:Arrayed<Species>['payload'];
			args?:{
				filter:SpeciesFilter;
				orderBy:SpeciesOrderBy;
				skip:scalar_Int;
				after:scalar_String;
				before:scalar_String;
				first:scalar_Int;
				last:scalar_Int
			};
		};
		allStarships:{
			payload:Arrayed<Starship>['payload'];
			args?:{
				filter:StarshipFilter;
				orderBy:StarshipOrderBy;
				skip:scalar_Int;
				after:scalar_String;
				before:scalar_String;
				first:scalar_Int;
				last:scalar_Int
			};
		};
		allVehicles:{
			payload:Arrayed<Vehicle>['payload'];
			args?:{
				filter:VehicleFilter;
				orderBy:VehicleOrderBy;
				skip:scalar_Int;
				after:scalar_String;
				before:scalar_String;
				first:scalar_Int;
				last:scalar_Int
			};
		};
		_allAssetsMeta:{
			payload:_QueryMeta['payload'];
			args?:{
				filter:AssetFilter;
				orderBy:AssetOrderBy;
				skip:scalar_Int;
				after:scalar_String;
				before:scalar_String;
				first:scalar_Int;
				last:scalar_Int
			};
		};
		_allFilmsMeta:{
			payload:_QueryMeta['payload'];
			args?:{
				filter:FilmFilter;
				orderBy:FilmOrderBy;
				skip:scalar_Int;
				after:scalar_String;
				before:scalar_String;
				first:scalar_Int;
				last:scalar_Int
			};
		};
		_allPersonsMeta:{
			payload:_QueryMeta['payload'];
			args?:{
				filter:PersonFilter;
				orderBy:PersonOrderBy;
				skip:scalar_Int;
				after:scalar_String;
				before:scalar_String;
				first:scalar_Int;
				last:scalar_Int
			};
		};
		_allPlanetsMeta:{
			payload:_QueryMeta['payload'];
			args?:{
				filter:PlanetFilter;
				orderBy:PlanetOrderBy;
				skip:scalar_Int;
				after:scalar_String;
				before:scalar_String;
				first:scalar_Int;
				last:scalar_Int
			};
		};
		_allSpeciesMeta:{
			payload:_QueryMeta['payload'];
			args?:{
				filter:SpeciesFilter;
				orderBy:SpeciesOrderBy;
				skip:scalar_Int;
				after:scalar_String;
				before:scalar_String;
				first:scalar_Int;
				last:scalar_Int
			};
		};
		_allStarshipsMeta:{
			payload:_QueryMeta['payload'];
			args?:{
				filter:StarshipFilter;
				orderBy:StarshipOrderBy;
				skip:scalar_Int;
				after:scalar_String;
				before:scalar_String;
				first:scalar_Int;
				last:scalar_Int
			};
		};
		_allVehiclesMeta:{
			payload:_QueryMeta['payload'];
			args?:{
				filter:VehicleFilter;
				orderBy:VehicleOrderBy;
				skip:scalar_Int;
				after:scalar_String;
				before:scalar_String;
				first:scalar_Int;
				last:scalar_Int
			};
		};
		Asset:{
			payload:Asset['payload'];
			args?:{
				id:scalar_ID
			};
		};
		Film:{
			payload:Film['payload'];
			args?:{
				id:scalar_ID;
				title:scalar_String
			};
		};
		Person:{
			payload:Person['payload'];
			args?:{
				id:scalar_ID;
				name:scalar_String
			};
		};
		Planet:{
			payload:Planet['payload'];
			args?:{
				id:scalar_ID;
				name:scalar_String
			};
		};
		Species:{
			payload:Species['payload'];
			args?:{
				id:scalar_ID;
				name:scalar_String
			};
		};
		Starship:{
			payload:Starship['payload'];
			args?:{
				id:scalar_ID;
				name:scalar_String
			};
		};
		Vehicle:{
			payload:Vehicle['payload'];
			args?:{
				id:scalar_ID;
				name:scalar_String
			};
		};
		node:{
			payload:Node['payload'];
			args:{
				id:scalar_ID
			};
		}
	};
	/**
	 * END OF queryType DEFINITIONS
	*/


	/**
	 * mutationType DEFINITIONS
	*/


	 export type mutation = {
		createAsset:{
			payload:Asset['payload'];
			args:{
				fileName:scalar_String;
				handle:scalar_String;
				height:scalar_Float;
				mimeType:scalar_String;
				size:scalar_Float;
				url:scalar_String;
				width:scalar_Float
			};
		};
		createFilm:{
			payload:Film['payload'];
			args:{
				director:scalar_String;
				episodeId:scalar_Int;
				isPublished:scalar_Boolean;
				openingCrawl:scalar_String;
				producers:scalar_String[];
				releaseDate:scalar_DateTime;
				title:scalar_String;
				charactersIds:scalar_ID[];
				characters:FilmcharactersPerson[];
				planetsIds:scalar_ID[];
				planets:FilmplanetsPlanet[];
				speciesIds:scalar_ID[];
				species:FilmspeciesSpecies[];
				starshipsIds:scalar_ID[];
				starships:FilmstarshipsStarship[];
				vehiclesIds:scalar_ID[];
				vehicles:FilmvehiclesVehicle[]
			};
		};
		createPerson:{
			payload:Person['payload'];
			args:{
				birthYear:scalar_String;
				eyeColor:PERSON_EYE_COLOR[];
				gender:PERSON_GENDER;
				hairColor:PERSON_HAIR_COLOR[];
				height:scalar_Int;
				isPublished:scalar_Boolean;
				mass:scalar_Float;
				name:scalar_String;
				skinColor:PERSON_SKIN_COLOR[];
				homeworldId:scalar_ID;
				homeworld:PersonhomeworldPlanet;
				filmsIds:scalar_ID[];
				films:PersonfilmsFilm[];
				speciesIds:scalar_ID[];
				species:PersonspeciesSpecies[];
				starshipsIds:scalar_ID[];
				starships:PersonstarshipsStarship[];
				vehiclesIds:scalar_ID[];
				vehicles:PersonvehiclesVehicle[]
			};
		};
		createPlanet:{
			payload:Planet['payload'];
			args:{
				climate:scalar_String[];
				diameter:scalar_Int;
				gravity:scalar_String;
				isPublished:scalar_Boolean;
				name:scalar_String;
				orbitalPeriod:scalar_Int;
				population:scalar_Float;
				rotationPeriod:scalar_Int;
				surfaceWater:scalar_Float;
				terrain:scalar_String[];
				filmsIds:scalar_ID[];
				films:PlanetfilmsFilm[];
				residentsIds:scalar_ID[];
				residents:PlanetresidentsPerson[]
			};
		};
		createSpecies:{
			payload:Species['payload'];
			args:{
				averageHeight:scalar_Int;
				averageLifespan:scalar_Int;
				classification:scalar_String;
				designation:scalar_String;
				eyeColor:SPECIES_EYE_COLOR[];
				hairColor:SPECIES_HAIR_COLOR[];
				isPublished:scalar_Boolean;
				language:scalar_String;
				name:scalar_String;
				skinColor:SPECIES_SKIN_COLOR[];
				filmsIds:scalar_ID[];
				films:SpeciesfilmsFilm[];
				peopleIds:scalar_ID[];
				people:SpeciespeoplePerson[]
			};
		};
		createStarship:{
			payload:Starship['payload'];
			args:{
				cargoCapacity:scalar_Float;
				class:scalar_String;
				consumables:scalar_String;
				costInCredits:scalar_Float;
				crew:scalar_Int;
				hyperdriveRating:scalar_Float;
				isPublished:scalar_Boolean;
				length:scalar_Float;
				manufacturer:scalar_String[];
				maxAtmospheringSpeed:scalar_Int;
				mglt:scalar_Int;
				name:scalar_String;
				passengers:scalar_Int;
				filmsIds:scalar_ID[];
				films:StarshipfilmsFilm[];
				pilotsIds:scalar_ID[];
				pilots:StarshippilotsPerson[]
			};
		};
		createVehicle:{
			payload:Vehicle['payload'];
			args:{
				cargoCapacity:scalar_Int;
				class:scalar_String;
				consumables:scalar_String;
				costInCredits:scalar_Int;
				crew:scalar_Int;
				isPublished:scalar_Boolean;
				length:scalar_Float;
				manufacturer:scalar_String[];
				maxAtmospheringSpeed:scalar_Int;
				model:scalar_String;
				name:scalar_String;
				passengers:scalar_Int;
				filmsIds:scalar_ID[];
				films:VehiclefilmsFilm[];
				pilotsIds:scalar_ID[];
				pilots:VehiclepilotsPerson[]
			};
		};
		updateAsset:{
			payload:Asset['payload'];
			args:{
				fileName:scalar_String;
				handle:scalar_String;
				height:scalar_Float;
				id:scalar_ID;
				mimeType:scalar_String;
				size:scalar_Float;
				url:scalar_String;
				width:scalar_Float
			};
		};
		updateFilm:{
			payload:Film['payload'];
			args:{
				director:scalar_String;
				episodeId:scalar_Int;
				id:scalar_ID;
				isPublished:scalar_Boolean;
				openingCrawl:scalar_String;
				producers:scalar_String[];
				releaseDate:scalar_DateTime;
				title:scalar_String;
				charactersIds:scalar_ID[];
				characters:FilmcharactersPerson[];
				planetsIds:scalar_ID[];
				planets:FilmplanetsPlanet[];
				speciesIds:scalar_ID[];
				species:FilmspeciesSpecies[];
				starshipsIds:scalar_ID[];
				starships:FilmstarshipsStarship[];
				vehiclesIds:scalar_ID[];
				vehicles:FilmvehiclesVehicle[]
			};
		};
		updatePerson:{
			payload:Person['payload'];
			args:{
				birthYear:scalar_String;
				eyeColor:PERSON_EYE_COLOR[];
				gender:PERSON_GENDER;
				hairColor:PERSON_HAIR_COLOR[];
				height:scalar_Int;
				id:scalar_ID;
				isPublished:scalar_Boolean;
				mass:scalar_Float;
				name:scalar_String;
				skinColor:PERSON_SKIN_COLOR[];
				homeworldId:scalar_ID;
				homeworld:PersonhomeworldPlanet;
				filmsIds:scalar_ID[];
				films:PersonfilmsFilm[];
				speciesIds:scalar_ID[];
				species:PersonspeciesSpecies[];
				starshipsIds:scalar_ID[];
				starships:PersonstarshipsStarship[];
				vehiclesIds:scalar_ID[];
				vehicles:PersonvehiclesVehicle[]
			};
		};
		updatePlanet:{
			payload:Planet['payload'];
			args:{
				climate:scalar_String[];
				diameter:scalar_Int;
				gravity:scalar_String;
				id:scalar_ID;
				isPublished:scalar_Boolean;
				name:scalar_String;
				orbitalPeriod:scalar_Int;
				population:scalar_Float;
				rotationPeriod:scalar_Int;
				surfaceWater:scalar_Float;
				terrain:scalar_String[];
				filmsIds:scalar_ID[];
				films:PlanetfilmsFilm[];
				residentsIds:scalar_ID[];
				residents:PlanetresidentsPerson[]
			};
		};
		updateSpecies:{
			payload:Species['payload'];
			args:{
				averageHeight:scalar_Int;
				averageLifespan:scalar_Int;
				classification:scalar_String;
				designation:scalar_String;
				eyeColor:SPECIES_EYE_COLOR[];
				hairColor:SPECIES_HAIR_COLOR[];
				id:scalar_ID;
				isPublished:scalar_Boolean;
				language:scalar_String;
				name:scalar_String;
				skinColor:SPECIES_SKIN_COLOR[];
				filmsIds:scalar_ID[];
				films:SpeciesfilmsFilm[];
				peopleIds:scalar_ID[];
				people:SpeciespeoplePerson[]
			};
		};
		updateStarship:{
			payload:Starship['payload'];
			args:{
				cargoCapacity:scalar_Float;
				class:scalar_String;
				consumables:scalar_String;
				costInCredits:scalar_Float;
				crew:scalar_Int;
				hyperdriveRating:scalar_Float;
				id:scalar_ID;
				isPublished:scalar_Boolean;
				length:scalar_Float;
				manufacturer:scalar_String[];
				maxAtmospheringSpeed:scalar_Int;
				mglt:scalar_Int;
				name:scalar_String;
				passengers:scalar_Int;
				filmsIds:scalar_ID[];
				films:StarshipfilmsFilm[];
				pilotsIds:scalar_ID[];
				pilots:StarshippilotsPerson[]
			};
		};
		updateVehicle:{
			payload:Vehicle['payload'];
			args:{
				cargoCapacity:scalar_Int;
				class:scalar_String;
				consumables:scalar_String;
				costInCredits:scalar_Int;
				crew:scalar_Int;
				id:scalar_ID;
				isPublished:scalar_Boolean;
				length:scalar_Float;
				manufacturer:scalar_String[];
				maxAtmospheringSpeed:scalar_Int;
				model:scalar_String;
				name:scalar_String;
				passengers:scalar_Int;
				filmsIds:scalar_ID[];
				films:VehiclefilmsFilm[];
				pilotsIds:scalar_ID[];
				pilots:VehiclepilotsPerson[]
			};
		};
		updateOrCreateAsset:{
			payload:Asset['payload'];
			args:{
				update:UpdateAsset;
				create:CreateAsset
			};
		};
		updateOrCreateFilm:{
			payload:Film['payload'];
			args:{
				update:UpdateFilm;
				create:CreateFilm
			};
		};
		updateOrCreatePerson:{
			payload:Person['payload'];
			args:{
				update:UpdatePerson;
				create:CreatePerson
			};
		};
		updateOrCreatePlanet:{
			payload:Planet['payload'];
			args:{
				update:UpdatePlanet;
				create:CreatePlanet
			};
		};
		updateOrCreateSpecies:{
			payload:Species['payload'];
			args:{
				update:UpdateSpecies;
				create:CreateSpecies
			};
		};
		updateOrCreateStarship:{
			payload:Starship['payload'];
			args:{
				update:UpdateStarship;
				create:CreateStarship
			};
		};
		updateOrCreateVehicle:{
			payload:Vehicle['payload'];
			args:{
				update:UpdateVehicle;
				create:CreateVehicle
			};
		};
		deleteAsset:{
			payload:Asset['payload'];
			args:{
				id:scalar_ID
			};
		};
		deleteFilm:{
			payload:Film['payload'];
			args:{
				id:scalar_ID
			};
		};
		deletePerson:{
			payload:Person['payload'];
			args:{
				id:scalar_ID
			};
		};
		deletePlanet:{
			payload:Planet['payload'];
			args:{
				id:scalar_ID
			};
		};
		deleteSpecies:{
			payload:Species['payload'];
			args:{
				id:scalar_ID
			};
		};
		deleteStarship:{
			payload:Starship['payload'];
			args:{
				id:scalar_ID
			};
		};
		deleteVehicle:{
			payload:Vehicle['payload'];
			args:{
				id:scalar_ID
			};
		};
		addToFilmPlanets:{
			payload:AddToFilmPlanetsPayload['payload'];
			args:{
				planetsPlanetId:scalar_ID;
				filmsFilmId:scalar_ID
			};
		};
		addToFilmSpecies:{
			payload:AddToFilmSpeciesPayload['payload'];
			args:{
				speciesSpeciesId:scalar_ID;
				filmsFilmId:scalar_ID
			};
		};
		addToFilmStarships:{
			payload:AddToFilmStarshipsPayload['payload'];
			args:{
				starshipsStarshipId:scalar_ID;
				filmsFilmId:scalar_ID
			};
		};
		addToFilmVehicles:{
			payload:AddToFilmVehiclesPayload['payload'];
			args:{
				vehiclesVehicleId:scalar_ID;
				filmsFilmId:scalar_ID
			};
		};
		addToPeopleFilm:{
			payload:AddToPeopleFilmPayload['payload'];
			args:{
				filmsFilmId:scalar_ID;
				charactersPersonId:scalar_ID
			};
		};
		addToPeoplePlanet:{
			payload:AddToPeoplePlanetPayload['payload'];
			args:{
				homeworldPlanetId:scalar_ID;
				residentsPersonId:scalar_ID
			};
		};
		addToPeopleSpecies:{
			payload:AddToPeopleSpeciesPayload['payload'];
			args:{
				speciesSpeciesId:scalar_ID;
				peoplePersonId:scalar_ID
			};
		};
		addToPeopleStarships:{
			payload:AddToPeopleStarshipsPayload['payload'];
			args:{
				starshipsStarshipId:scalar_ID;
				pilotsPersonId:scalar_ID
			};
		};
		addToPeopleVehicles:{
			payload:AddToPeopleVehiclesPayload['payload'];
			args:{
				vehiclesVehicleId:scalar_ID;
				pilotsPersonId:scalar_ID
			};
		};
		removeFromFilmPlanets:{
			payload:RemoveFromFilmPlanetsPayload['payload'];
			args:{
				planetsPlanetId:scalar_ID;
				filmsFilmId:scalar_ID
			};
		};
		removeFromFilmSpecies:{
			payload:RemoveFromFilmSpeciesPayload['payload'];
			args:{
				speciesSpeciesId:scalar_ID;
				filmsFilmId:scalar_ID
			};
		};
		removeFromFilmStarships:{
			payload:RemoveFromFilmStarshipsPayload['payload'];
			args:{
				starshipsStarshipId:scalar_ID;
				filmsFilmId:scalar_ID
			};
		};
		removeFromFilmVehicles:{
			payload:RemoveFromFilmVehiclesPayload['payload'];
			args:{
				vehiclesVehicleId:scalar_ID;
				filmsFilmId:scalar_ID
			};
		};
		removeFromPeopleFilm:{
			payload:RemoveFromPeopleFilmPayload['payload'];
			args:{
				filmsFilmId:scalar_ID;
				charactersPersonId:scalar_ID
			};
		};
		removeFromPeoplePlanet:{
			payload:RemoveFromPeoplePlanetPayload['payload'];
			args:{
				homeworldPlanetId:scalar_ID;
				residentsPersonId:scalar_ID
			};
		};
		removeFromPeopleSpecies:{
			payload:RemoveFromPeopleSpeciesPayload['payload'];
			args:{
				speciesSpeciesId:scalar_ID;
				peoplePersonId:scalar_ID
			};
		};
		removeFromPeopleStarships:{
			payload:RemoveFromPeopleStarshipsPayload['payload'];
			args:{
				starshipsStarshipId:scalar_ID;
				pilotsPersonId:scalar_ID
			};
		};
		removeFromPeopleVehicles:{
			payload:RemoveFromPeopleVehiclesPayload['payload'];
			args:{
				vehiclesVehicleId:scalar_ID;
				pilotsPersonId:scalar_ID
			};
		};
		invokeFunction:{
			payload:InvokeFunctionPayload['payload'];
			args:{
				input:InvokeFunctionInput
			};
		}
	};
	/**
	 * END OF mutationType DEFINITIONS
	*/


	/**
	 * subscriptionType DEFINITIONS
	*/


	 export type subscription = {
		Asset:{
			payload:AssetSubscriptionPayload['payload'];
			args?:{
				filter:AssetSubscriptionFilter
			};
		};
		Film:{
			payload:FilmSubscriptionPayload['payload'];
			args?:{
				filter:FilmSubscriptionFilter
			};
		};
		Person:{
			payload:PersonSubscriptionPayload['payload'];
			args?:{
				filter:PersonSubscriptionFilter
			};
		};
		Planet:{
			payload:PlanetSubscriptionPayload['payload'];
			args?:{
				filter:PlanetSubscriptionFilter
			};
		};
		Species:{
			payload:SpeciesSubscriptionPayload['payload'];
			args?:{
				filter:SpeciesSubscriptionFilter
			};
		};
		Starship:{
			payload:StarshipSubscriptionPayload['payload'];
			args?:{
				filter:StarshipSubscriptionFilter
			};
		};
		Vehicle:{
			payload:VehicleSubscriptionPayload['payload'];
			args?:{
				filter:VehicleSubscriptionFilter
			};
		}
	};
	/**
	 * END OF subscriptionType DEFINITIONS
	*/


	/**
	 * types DEFINITIONS
	*/


	export type AddToFilmPlanetsPayload = {
		payload:{
			filmsFilm?:query["Film"];
			planetsPlanet?:query["Planet"]
		};
	};
	export type AddToFilmSpeciesPayload = {
		payload:{
			filmsFilm?:query["Film"];
			speciesSpecies?:query["Species"]
		};
	};
	export type AddToFilmStarshipsPayload = {
		payload:{
			filmsFilm?:query["Film"];
			starshipsStarship?:query["Starship"]
		};
	};
	export type AddToFilmVehiclesPayload = {
		payload:{
			filmsFilm?:query["Film"];
			vehiclesVehicle?:query["Vehicle"]
		};
	};
	export type AddToPeopleFilmPayload = {
		payload:{
			charactersPerson?:query["Person"];
			filmsFilm?:query["Film"]
		};
	};
	export type AddToPeoplePlanetPayload = {
		payload:{
			residentsPerson?:query["Person"];
			homeworldPlanet?:query["Planet"]
		};
	};
	export type AddToPeopleSpeciesPayload = {
		payload:{
			peoplePerson?:query["Person"];
			speciesSpecies?:query["Species"]
		};
	};
	export type AddToPeopleStarshipsPayload = {
		payload:{
			pilotsPerson?:query["Person"];
			starshipsStarship?:query["Starship"]
		};
	};
	export type AddToPeopleVehiclesPayload = {
		payload:{
			pilotsPerson?:query["Person"];
			vehiclesVehicle?:query["Vehicle"]
		};
	};
	export type AssetPreviousValues = {
		payload:{
			createdAt:scalar_DateTime;
			/**
			 * Original File Name
			*/
			fileName:scalar_String;
			/**
			 * The File Handle
			*/
			handle:scalar_String;
			/**
			 * The height of the file in case it is an image
			*/
			height?:scalar_Float;
			id:scalar_ID;
			/**
			 * The Mime Type
			*/
			mimeType?:scalar_String;
			/**
			 * The Size Of The File
			*/
			size:scalar_Float;
			updatedAt:scalar_DateTime;
			/**
			 * The Url Of The Asset
			*/
			url:scalar_String;
			/**
			 * The width of the file in case it is an image
			*/
			width?:scalar_Float
		};
	};
	export type AssetSubscriptionFilter = {
			/**
			 * Logical AND on all given filters.
			*/
			AND:AssetSubscriptionFilter[];
			/**
			 * Logical OR on all given filters.
			*/
			OR:AssetSubscriptionFilter[];
			/**
			 * The subscription event gets dispatched when it's listed in mutation_in
			*/
			mutation_in:_ModelMutationType[];
			/**
			 * The subscription event gets only dispatched when one of the updated fields names is included in this list
			*/
			updatedFields_contains?:scalar_String;
			/**
			 * The subscription event gets only dispatched when all of the field names included in this list have been updated
			*/
			updatedFields_contains_every:scalar_String[];
			/**
			 * The subscription event gets only dispatched when some of the field names included in this list have been updated
			*/
			updatedFields_contains_some:scalar_String[];
			node?:AssetSubscriptionFilterNode
		};
	export type AssetSubscriptionFilterNode = {
			createdAt?:scalar_DateTime;
			/**
			 * All values that are not equal to given value.
			*/
			createdAt_not?:scalar_DateTime;
			/**
			 * All values that are contained in given list.
			*/
			createdAt_in:scalar_DateTime[];
			/**
			 * All values that are not contained in given list.
			*/
			createdAt_not_in:scalar_DateTime[];
			/**
			 * All values less than the given value.
			*/
			createdAt_lt?:scalar_DateTime;
			/**
			 * All values less than or equal the given value.
			*/
			createdAt_lte?:scalar_DateTime;
			/**
			 * All values greater than the given value.
			*/
			createdAt_gt?:scalar_DateTime;
			/**
			 * All values greater than or equal the given value.
			*/
			createdAt_gte?:scalar_DateTime;
			fileName?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			fileName_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			fileName_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			fileName_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			fileName_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			fileName_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			fileName_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			fileName_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			fileName_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			fileName_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			fileName_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			fileName_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			fileName_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			fileName_not_ends_with?:scalar_String;
			handle?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			handle_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			handle_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			handle_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			handle_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			handle_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			handle_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			handle_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			handle_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			handle_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			handle_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			handle_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			handle_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			handle_not_ends_with?:scalar_String;
			height?:scalar_Float;
			/**
			 * All values that are not equal to given value.
			*/
			height_not?:scalar_Float;
			/**
			 * All values that are contained in given list.
			*/
			height_in:scalar_Float[];
			/**
			 * All values that are not contained in given list.
			*/
			height_not_in:scalar_Float[];
			/**
			 * All values less than the given value.
			*/
			height_lt?:scalar_Float;
			/**
			 * All values less than or equal the given value.
			*/
			height_lte?:scalar_Float;
			/**
			 * All values greater than the given value.
			*/
			height_gt?:scalar_Float;
			/**
			 * All values greater than or equal the given value.
			*/
			height_gte?:scalar_Float;
			id?:scalar_ID;
			/**
			 * All values that are not equal to given value.
			*/
			id_not?:scalar_ID;
			/**
			 * All values that are contained in given list.
			*/
			id_in:scalar_ID[];
			/**
			 * All values that are not contained in given list.
			*/
			id_not_in:scalar_ID[];
			/**
			 * All values less than the given value.
			*/
			id_lt?:scalar_ID;
			/**
			 * All values less than or equal the given value.
			*/
			id_lte?:scalar_ID;
			/**
			 * All values greater than the given value.
			*/
			id_gt?:scalar_ID;
			/**
			 * All values greater than or equal the given value.
			*/
			id_gte?:scalar_ID;
			/**
			 * All values containing the given string.
			*/
			id_contains?:scalar_ID;
			/**
			 * All values not containing the given string.
			*/
			id_not_contains?:scalar_ID;
			/**
			 * All values starting with the given string.
			*/
			id_starts_with?:scalar_ID;
			/**
			 * All values not starting with the given string.
			*/
			id_not_starts_with?:scalar_ID;
			/**
			 * All values ending with the given string.
			*/
			id_ends_with?:scalar_ID;
			/**
			 * All values not ending with the given string.
			*/
			id_not_ends_with?:scalar_ID;
			mimeType?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			mimeType_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			mimeType_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			mimeType_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			mimeType_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			mimeType_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			mimeType_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			mimeType_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			mimeType_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			mimeType_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			mimeType_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			mimeType_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			mimeType_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			mimeType_not_ends_with?:scalar_String;
			size?:scalar_Float;
			/**
			 * All values that are not equal to given value.
			*/
			size_not?:scalar_Float;
			/**
			 * All values that are contained in given list.
			*/
			size_in:scalar_Float[];
			/**
			 * All values that are not contained in given list.
			*/
			size_not_in:scalar_Float[];
			/**
			 * All values less than the given value.
			*/
			size_lt?:scalar_Float;
			/**
			 * All values less than or equal the given value.
			*/
			size_lte?:scalar_Float;
			/**
			 * All values greater than the given value.
			*/
			size_gt?:scalar_Float;
			/**
			 * All values greater than or equal the given value.
			*/
			size_gte?:scalar_Float;
			updatedAt?:scalar_DateTime;
			/**
			 * All values that are not equal to given value.
			*/
			updatedAt_not?:scalar_DateTime;
			/**
			 * All values that are contained in given list.
			*/
			updatedAt_in:scalar_DateTime[];
			/**
			 * All values that are not contained in given list.
			*/
			updatedAt_not_in:scalar_DateTime[];
			/**
			 * All values less than the given value.
			*/
			updatedAt_lt?:scalar_DateTime;
			/**
			 * All values less than or equal the given value.
			*/
			updatedAt_lte?:scalar_DateTime;
			/**
			 * All values greater than the given value.
			*/
			updatedAt_gt?:scalar_DateTime;
			/**
			 * All values greater than or equal the given value.
			*/
			updatedAt_gte?:scalar_DateTime;
			url?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			url_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			url_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			url_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			url_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			url_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			url_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			url_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			url_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			url_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			url_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			url_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			url_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			url_not_ends_with?:scalar_String;
			width?:scalar_Float;
			/**
			 * All values that are not equal to given value.
			*/
			width_not?:scalar_Float;
			/**
			 * All values that are contained in given list.
			*/
			width_in:scalar_Float[];
			/**
			 * All values that are not contained in given list.
			*/
			width_not_in:scalar_Float[];
			/**
			 * All values less than the given value.
			*/
			width_lt?:scalar_Float;
			/**
			 * All values less than or equal the given value.
			*/
			width_lte?:scalar_Float;
			/**
			 * All values greater than the given value.
			*/
			width_gt?:scalar_Float;
			/**
			 * All values greater than or equal the given value.
			*/
			width_gte?:scalar_Float
		};
	export type AssetSubscriptionPayload = {
		payload:{
			mutation:_ModelMutationType;
			node?:query["Asset"];
			updatedFields:scalar_String[];
			previousValues?:AssetPreviousValues
		};
	};
	export type CreateAsset = {
			/**
			 * Original File Name
			*/
			fileName:scalar_String;
			/**
			 * The File Handle
			*/
			handle:scalar_String;
			/**
			 * The height of the file in case it is an image
			*/
			height?:scalar_Float;
			/**
			 * The Mime Type
			*/
			mimeType?:scalar_String;
			/**
			 * The Size Of The File
			*/
			size:scalar_Float;
			/**
			 * The Url Of The Asset
			*/
			url:scalar_String;
			/**
			 * The width of the file in case it is an image
			*/
			width?:scalar_Float
		};
	export type CreateFilm = {
			/**
			 * The name of the director of this film.
			*/
			director?:scalar_String;
			/**
			 * The episode number of this film.
			*/
			episodeId:scalar_Int;
			/**
			 * indicates if the record is published
			*/
			isPublished?:scalar_Boolean;
			/**
			 * The opening paragraphs at the beginning of this film.
			*/
			openingCrawl?:scalar_String;
			/**
			 * The names of the producers of this film.
			*/
			producers:scalar_String[];
			/**
			 *  The ISO 8601 date format of film release at original creator country.
			*/
			releaseDate?:scalar_DateTime;
			/**
			 * The title of this film
			*/
			title:scalar_String;
			charactersIds:scalar_ID[];
			characters:FilmcharactersPerson[];
			planetsIds:scalar_ID[];
			planets:FilmplanetsPlanet[];
			speciesIds:scalar_ID[];
			species:FilmspeciesSpecies[];
			starshipsIds:scalar_ID[];
			starships:FilmstarshipsStarship[];
			vehiclesIds:scalar_ID[];
			vehicles:FilmvehiclesVehicle[]
		};
	export type CreatePerson = {
			/**
			 * The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.
			*/
			birthYear?:scalar_String;
			/**
			 * The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye.
			*/
			eyeColor:PERSON_EYE_COLOR[];
			/**
			 *  The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender.
			*/
			gender?:PERSON_GENDER;
			/**
			 * The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair.
			*/
			hairColor:PERSON_HAIR_COLOR[];
			/**
			 * The height of the person in centimeters.
			*/
			height?:scalar_Int;
			/**
			 * indicates if the record is published
			*/
			isPublished?:scalar_Boolean;
			/**
			 * The mass of the person in kilograms.
			*/
			mass?:scalar_Float;
			/**
			 * The name of this person.
			*/
			name:scalar_String;
			/**
			 * The skin color of this person.
			*/
			skinColor:PERSON_SKIN_COLOR[];
			homeworldId?:scalar_ID;
			homeworld?:PersonhomeworldPlanet;
			filmsIds:scalar_ID[];
			films:PersonfilmsFilm[];
			speciesIds:scalar_ID[];
			species:PersonspeciesSpecies[];
			starshipsIds:scalar_ID[];
			starships:PersonstarshipsStarship[];
			vehiclesIds:scalar_ID[];
			vehicles:PersonvehiclesVehicle[]
		};
	export type CreatePlanet = {
			/**
			 * The climate of this planet.
			*/
			climate:scalar_String[];
			/**
			 * The diameter of this planet in kilometers.
			*/
			diameter?:scalar_Int;
			/**
			 * A number denoting the gravity of this planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
			*/
			gravity?:scalar_String;
			/**
			 * indicates if the record is published
			*/
			isPublished?:scalar_Boolean;
			/**
			 * The name of the planet
			*/
			name:scalar_String;
			/**
			 * The number of standard days it takes for this planet to complete a single orbit of its local star.
			*/
			orbitalPeriod?:scalar_Int;
			/**
			 * The average population of sentient beings inhabiting this planet.
			*/
			population?:scalar_Float;
			/**
			 * The number of standard hours it takes for this planet to complete a single rotation on its axis.
			*/
			rotationPeriod?:scalar_Int;
			/**
			 * The percentage of the planet surface that is naturally occurring water or bodies of water.
			*/
			surfaceWater?:scalar_Float;
			/**
			 * The terrain of this planet.
			*/
			terrain:scalar_String[];
			filmsIds:scalar_ID[];
			films:PlanetfilmsFilm[];
			residentsIds:scalar_ID[];
			residents:PlanetresidentsPerson[]
		};
	export type CreateSpecies = {
			/**
			 * The average height of this species in centimeters.
			*/
			averageHeight?:scalar_Int;
			/**
			 * The average lifespan of this species in years.
			*/
			averageLifespan?:scalar_Int;
			/**
			 * The classification of this species, such as "mammal" or "reptile".
			*/
			classification?:scalar_String;
			/**
			 * The designation of this species, such as "sentient".
			*/
			designation?:scalar_String;
			/**
			 * The eye colors for this species, "UNKNOWN" if not known, null if this species does not typically have eyes.
			*/
			eyeColor:SPECIES_EYE_COLOR[];
			/**
			 * The hair colors for this species, "UNKNOWN" if not known, null if this species does not typically have hairs.
			*/
			hairColor:SPECIES_HAIR_COLOR[];
			/**
			 * indicates if the record is published
			*/
			isPublished?:scalar_Boolean;
			/**
			 * The language commonly spoken by this species.
			*/
			language?:scalar_String;
			/**
			 * The name of this species.
			*/
			name:scalar_String;
			/**
			 * The skin colors for this species, "UNKNOWN" if not known, null if this species does not typically have a skin.
			*/
			skinColor:SPECIES_SKIN_COLOR[];
			filmsIds:scalar_ID[];
			films:SpeciesfilmsFilm[];
			peopleIds:scalar_ID[];
			people:SpeciespeoplePerson[]
		};
	export type CreateStarship = {
			/**
			 * The maximum number of kilograms that this starship can transport.
			*/
			cargoCapacity?:scalar_Float;
			/**
			 * The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation"
			*/
			class?:scalar_String;
			/**
			 * The maximum length of time that this starship can provide consumables for its entire crew without having to resupply.
			*/
			consumables?:scalar_String;
			/**
			 *  The cost of this starship new, in galactic credits.
			*/
			costInCredits?:scalar_Float;
			/**
			 * The number of personnel needed to run or pilot this starship.
			*/
			crew?:scalar_Int;
			/**
			 * The class of this starships hyperdrive.
			*/
			hyperdriveRating?:scalar_Float;
			/**
			 * indicates if the record is published
			*/
			isPublished?:scalar_Boolean;
			/**
			 * The length of this starship in meters.
			*/
			length?:scalar_Float;
			/**
			 * The manufacturer of this starship.
			*/
			manufacturer:scalar_String[];
			/**
			 *  The maximum speed of this starship in the atmosphere. null if this starship is incapable of atmospheric flight.
			*/
			maxAtmospheringSpeed?:scalar_Int;
			/**
			 * The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe.
			*/
			mglt?:scalar_Int;
			/**
			 * The name of this starship. The common name, such as "Death Star".
			*/
			name:scalar_String;
			/**
			 *  The number of non-essential people this starship can transport.
			*/
			passengers?:scalar_Int;
			filmsIds:scalar_ID[];
			films:StarshipfilmsFilm[];
			pilotsIds:scalar_ID[];
			pilots:StarshippilotsPerson[]
		};
	export type CreateVehicle = {
			/**
			 * The maximum number of kilograms that this vehicle can transport.
			*/
			cargoCapacity?:scalar_Int;
			/**
			 *  The class of this vehicle, such as "Wheeled" or "Repulsorcraft".
			*/
			class?:scalar_String;
			/**
			 * The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply.
			*/
			consumables?:scalar_String;
			/**
			 * The cost of this vehicle new, in Galactic Credits.
			*/
			costInCredits?:scalar_Int;
			/**
			 * The number of personnel needed to run or pilot this vehicle.
			*/
			crew?:scalar_Int;
			/**
			 * indicates if the record is published
			*/
			isPublished?:scalar_Boolean;
			/**
			 *  The length of this vehicle in meters.
			*/
			length?:scalar_Float;
			/**
			 * The manufacturer of this vehicle.
			*/
			manufacturer:scalar_String[];
			/**
			 * The maximum speed of this vehicle in the atmosphere.
			*/
			maxAtmospheringSpeed?:scalar_Int;
			/**
			 * The model or official name of this vehicle. Such as "All-Terrain Attack Transport".
			*/
			model?:scalar_String;
			/**
			 * The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike".
			*/
			name:scalar_String;
			/**
			 * The number of non-essential people this vehicle can transport.
			*/
			passengers?:scalar_Int;
			filmsIds:scalar_ID[];
			films:VehiclefilmsFilm[];
			pilotsIds:scalar_ID[];
			pilots:VehiclepilotsPerson[]
		};
	export type FilmPreviousValues = {
		payload:{
			createdAt:scalar_DateTime;
			/**
			 * The name of the director of this film.
			*/
			director?:scalar_String;
			/**
			 * The episode number of this film.
			*/
			episodeId:scalar_Int;
			id:scalar_ID;
			/**
			 * indicates if the record is published
			*/
			isPublished:scalar_Boolean;
			/**
			 * The opening paragraphs at the beginning of this film.
			*/
			openingCrawl?:scalar_String;
			/**
			 * The names of the producers of this film.
			*/
			producers:scalar_String[];
			/**
			 *  The ISO 8601 date format of film release at original creator country.
			*/
			releaseDate?:scalar_DateTime;
			/**
			 * The title of this film
			*/
			title:scalar_String;
			updatedAt:scalar_DateTime
		};
	};
	export type FilmSubscriptionFilter = {
			/**
			 * Logical AND on all given filters.
			*/
			AND:FilmSubscriptionFilter[];
			/**
			 * Logical OR on all given filters.
			*/
			OR:FilmSubscriptionFilter[];
			/**
			 * The subscription event gets dispatched when it's listed in mutation_in
			*/
			mutation_in:_ModelMutationType[];
			/**
			 * The subscription event gets only dispatched when one of the updated fields names is included in this list
			*/
			updatedFields_contains?:scalar_String;
			/**
			 * The subscription event gets only dispatched when all of the field names included in this list have been updated
			*/
			updatedFields_contains_every:scalar_String[];
			/**
			 * The subscription event gets only dispatched when some of the field names included in this list have been updated
			*/
			updatedFields_contains_some:scalar_String[];
			node?:FilmSubscriptionFilterNode
		};
	export type FilmSubscriptionFilterNode = {
			createdAt?:scalar_DateTime;
			/**
			 * All values that are not equal to given value.
			*/
			createdAt_not?:scalar_DateTime;
			/**
			 * All values that are contained in given list.
			*/
			createdAt_in:scalar_DateTime[];
			/**
			 * All values that are not contained in given list.
			*/
			createdAt_not_in:scalar_DateTime[];
			/**
			 * All values less than the given value.
			*/
			createdAt_lt?:scalar_DateTime;
			/**
			 * All values less than or equal the given value.
			*/
			createdAt_lte?:scalar_DateTime;
			/**
			 * All values greater than the given value.
			*/
			createdAt_gt?:scalar_DateTime;
			/**
			 * All values greater than or equal the given value.
			*/
			createdAt_gte?:scalar_DateTime;
			director?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			director_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			director_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			director_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			director_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			director_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			director_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			director_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			director_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			director_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			director_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			director_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			director_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			director_not_ends_with?:scalar_String;
			episodeId?:scalar_Int;
			/**
			 * All values that are not equal to given value.
			*/
			episodeId_not?:scalar_Int;
			/**
			 * All values that are contained in given list.
			*/
			episodeId_in:scalar_Int[];
			/**
			 * All values that are not contained in given list.
			*/
			episodeId_not_in:scalar_Int[];
			/**
			 * All values less than the given value.
			*/
			episodeId_lt?:scalar_Int;
			/**
			 * All values less than or equal the given value.
			*/
			episodeId_lte?:scalar_Int;
			/**
			 * All values greater than the given value.
			*/
			episodeId_gt?:scalar_Int;
			/**
			 * All values greater than or equal the given value.
			*/
			episodeId_gte?:scalar_Int;
			id?:scalar_ID;
			/**
			 * All values that are not equal to given value.
			*/
			id_not?:scalar_ID;
			/**
			 * All values that are contained in given list.
			*/
			id_in:scalar_ID[];
			/**
			 * All values that are not contained in given list.
			*/
			id_not_in:scalar_ID[];
			/**
			 * All values less than the given value.
			*/
			id_lt?:scalar_ID;
			/**
			 * All values less than or equal the given value.
			*/
			id_lte?:scalar_ID;
			/**
			 * All values greater than the given value.
			*/
			id_gt?:scalar_ID;
			/**
			 * All values greater than or equal the given value.
			*/
			id_gte?:scalar_ID;
			/**
			 * All values containing the given string.
			*/
			id_contains?:scalar_ID;
			/**
			 * All values not containing the given string.
			*/
			id_not_contains?:scalar_ID;
			/**
			 * All values starting with the given string.
			*/
			id_starts_with?:scalar_ID;
			/**
			 * All values not starting with the given string.
			*/
			id_not_starts_with?:scalar_ID;
			/**
			 * All values ending with the given string.
			*/
			id_ends_with?:scalar_ID;
			/**
			 * All values not ending with the given string.
			*/
			id_not_ends_with?:scalar_ID;
			isPublished?:scalar_Boolean;
			/**
			 * All values that are not equal to given value.
			*/
			isPublished_not?:scalar_Boolean;
			openingCrawl?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			openingCrawl_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			openingCrawl_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			openingCrawl_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			openingCrawl_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			openingCrawl_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			openingCrawl_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			openingCrawl_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			openingCrawl_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			openingCrawl_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			openingCrawl_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			openingCrawl_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			openingCrawl_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			openingCrawl_not_ends_with?:scalar_String;
			releaseDate?:scalar_DateTime;
			/**
			 * All values that are not equal to given value.
			*/
			releaseDate_not?:scalar_DateTime;
			/**
			 * All values that are contained in given list.
			*/
			releaseDate_in:scalar_DateTime[];
			/**
			 * All values that are not contained in given list.
			*/
			releaseDate_not_in:scalar_DateTime[];
			/**
			 * All values less than the given value.
			*/
			releaseDate_lt?:scalar_DateTime;
			/**
			 * All values less than or equal the given value.
			*/
			releaseDate_lte?:scalar_DateTime;
			/**
			 * All values greater than the given value.
			*/
			releaseDate_gt?:scalar_DateTime;
			/**
			 * All values greater than or equal the given value.
			*/
			releaseDate_gte?:scalar_DateTime;
			title?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			title_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			title_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			title_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			title_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			title_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			title_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			title_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			title_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			title_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			title_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			title_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			title_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			title_not_ends_with?:scalar_String;
			updatedAt?:scalar_DateTime;
			/**
			 * All values that are not equal to given value.
			*/
			updatedAt_not?:scalar_DateTime;
			/**
			 * All values that are contained in given list.
			*/
			updatedAt_in:scalar_DateTime[];
			/**
			 * All values that are not contained in given list.
			*/
			updatedAt_not_in:scalar_DateTime[];
			/**
			 * All values less than the given value.
			*/
			updatedAt_lt?:scalar_DateTime;
			/**
			 * All values less than or equal the given value.
			*/
			updatedAt_lte?:scalar_DateTime;
			/**
			 * All values greater than the given value.
			*/
			updatedAt_gt?:scalar_DateTime;
			/**
			 * All values greater than or equal the given value.
			*/
			updatedAt_gte?:scalar_DateTime;
			characters_every?:PersonFilter;
			characters_some?:PersonFilter;
			characters_none?:PersonFilter;
			planets_every?:PlanetFilter;
			planets_some?:PlanetFilter;
			planets_none?:PlanetFilter;
			species_every?:SpeciesFilter;
			species_some?:SpeciesFilter;
			species_none?:SpeciesFilter;
			starships_every?:StarshipFilter;
			starships_some?:StarshipFilter;
			starships_none?:StarshipFilter;
			vehicles_every?:VehicleFilter;
			vehicles_some?:VehicleFilter;
			vehicles_none?:VehicleFilter
		};
	export type FilmSubscriptionPayload = {
		payload:{
			mutation:_ModelMutationType;
			node?:query["Film"];
			updatedFields:scalar_String[];
			previousValues?:FilmPreviousValues
		};
	};
	export type FilmcharactersPerson = {
			/**
			 * The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.
			*/
			birthYear?:scalar_String;
			/**
			 * The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye.
			*/
			eyeColor:PERSON_EYE_COLOR[];
			/**
			 *  The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender.
			*/
			gender?:PERSON_GENDER;
			/**
			 * The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair.
			*/
			hairColor:PERSON_HAIR_COLOR[];
			/**
			 * The height of the person in centimeters.
			*/
			height?:scalar_Int;
			/**
			 * indicates if the record is published
			*/
			isPublished?:scalar_Boolean;
			/**
			 * The mass of the person in kilograms.
			*/
			mass?:scalar_Float;
			/**
			 * The name of this person.
			*/
			name:scalar_String;
			/**
			 * The skin color of this person.
			*/
			skinColor:PERSON_SKIN_COLOR[];
			homeworldId?:scalar_ID;
			homeworld?:PersonhomeworldPlanet;
			filmsIds:scalar_ID[];
			films:PersonfilmsFilm[];
			speciesIds:scalar_ID[];
			species:PersonspeciesSpecies[];
			starshipsIds:scalar_ID[];
			starships:PersonstarshipsStarship[];
			vehiclesIds:scalar_ID[];
			vehicles:PersonvehiclesVehicle[]
		};
	export type FilmplanetsPlanet = {
			/**
			 * The climate of this planet.
			*/
			climate:scalar_String[];
			/**
			 * The diameter of this planet in kilometers.
			*/
			diameter?:scalar_Int;
			/**
			 * A number denoting the gravity of this planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
			*/
			gravity?:scalar_String;
			/**
			 * indicates if the record is published
			*/
			isPublished?:scalar_Boolean;
			/**
			 * The name of the planet
			*/
			name:scalar_String;
			/**
			 * The number of standard days it takes for this planet to complete a single orbit of its local star.
			*/
			orbitalPeriod?:scalar_Int;
			/**
			 * The average population of sentient beings inhabiting this planet.
			*/
			population?:scalar_Float;
			/**
			 * The number of standard hours it takes for this planet to complete a single rotation on its axis.
			*/
			rotationPeriod?:scalar_Int;
			/**
			 * The percentage of the planet surface that is naturally occurring water or bodies of water.
			*/
			surfaceWater?:scalar_Float;
			/**
			 * The terrain of this planet.
			*/
			terrain:scalar_String[];
			filmsIds:scalar_ID[];
			films:PlanetfilmsFilm[];
			residentsIds:scalar_ID[];
			residents:PlanetresidentsPerson[]
		};
	export type FilmspeciesSpecies = {
			/**
			 * The average height of this species in centimeters.
			*/
			averageHeight?:scalar_Int;
			/**
			 * The average lifespan of this species in years.
			*/
			averageLifespan?:scalar_Int;
			/**
			 * The classification of this species, such as "mammal" or "reptile".
			*/
			classification?:scalar_String;
			/**
			 * The designation of this species, such as "sentient".
			*/
			designation?:scalar_String;
			/**
			 * The eye colors for this species, "UNKNOWN" if not known, null if this species does not typically have eyes.
			*/
			eyeColor:SPECIES_EYE_COLOR[];
			/**
			 * The hair colors for this species, "UNKNOWN" if not known, null if this species does not typically have hairs.
			*/
			hairColor:SPECIES_HAIR_COLOR[];
			/**
			 * indicates if the record is published
			*/
			isPublished?:scalar_Boolean;
			/**
			 * The language commonly spoken by this species.
			*/
			language?:scalar_String;
			/**
			 * The name of this species.
			*/
			name:scalar_String;
			/**
			 * The skin colors for this species, "UNKNOWN" if not known, null if this species does not typically have a skin.
			*/
			skinColor:SPECIES_SKIN_COLOR[];
			filmsIds:scalar_ID[];
			films:SpeciesfilmsFilm[];
			peopleIds:scalar_ID[];
			people:SpeciespeoplePerson[]
		};
	export type FilmstarshipsStarship = {
			/**
			 * The maximum number of kilograms that this starship can transport.
			*/
			cargoCapacity?:scalar_Float;
			/**
			 * The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation"
			*/
			class?:scalar_String;
			/**
			 * The maximum length of time that this starship can provide consumables for its entire crew without having to resupply.
			*/
			consumables?:scalar_String;
			/**
			 *  The cost of this starship new, in galactic credits.
			*/
			costInCredits?:scalar_Float;
			/**
			 * The number of personnel needed to run or pilot this starship.
			*/
			crew?:scalar_Int;
			/**
			 * The class of this starships hyperdrive.
			*/
			hyperdriveRating?:scalar_Float;
			/**
			 * indicates if the record is published
			*/
			isPublished?:scalar_Boolean;
			/**
			 * The length of this starship in meters.
			*/
			length?:scalar_Float;
			/**
			 * The manufacturer of this starship.
			*/
			manufacturer:scalar_String[];
			/**
			 *  The maximum speed of this starship in the atmosphere. null if this starship is incapable of atmospheric flight.
			*/
			maxAtmospheringSpeed?:scalar_Int;
			/**
			 * The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe.
			*/
			mglt?:scalar_Int;
			/**
			 * The name of this starship. The common name, such as "Death Star".
			*/
			name:scalar_String;
			/**
			 *  The number of non-essential people this starship can transport.
			*/
			passengers?:scalar_Int;
			filmsIds:scalar_ID[];
			films:StarshipfilmsFilm[];
			pilotsIds:scalar_ID[];
			pilots:StarshippilotsPerson[]
		};
	export type FilmvehiclesVehicle = {
			/**
			 * The maximum number of kilograms that this vehicle can transport.
			*/
			cargoCapacity?:scalar_Int;
			/**
			 *  The class of this vehicle, such as "Wheeled" or "Repulsorcraft".
			*/
			class?:scalar_String;
			/**
			 * The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply.
			*/
			consumables?:scalar_String;
			/**
			 * The cost of this vehicle new, in Galactic Credits.
			*/
			costInCredits?:scalar_Int;
			/**
			 * The number of personnel needed to run or pilot this vehicle.
			*/
			crew?:scalar_Int;
			/**
			 * indicates if the record is published
			*/
			isPublished?:scalar_Boolean;
			/**
			 *  The length of this vehicle in meters.
			*/
			length?:scalar_Float;
			/**
			 * The manufacturer of this vehicle.
			*/
			manufacturer:scalar_String[];
			/**
			 * The maximum speed of this vehicle in the atmosphere.
			*/
			maxAtmospheringSpeed?:scalar_Int;
			/**
			 * The model or official name of this vehicle. Such as "All-Terrain Attack Transport".
			*/
			model?:scalar_String;
			/**
			 * The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike".
			*/
			name:scalar_String;
			/**
			 * The number of non-essential people this vehicle can transport.
			*/
			passengers?:scalar_Int;
			filmsIds:scalar_ID[];
			films:VehiclefilmsFilm[];
			pilotsIds:scalar_ID[];
			pilots:VehiclepilotsPerson[]
		};
	export type InvokeFunctionInput = {
			name:scalar_String;
			input:scalar_String;
			clientMutationId?:scalar_String
		};
	export type InvokeFunctionPayload = {
		payload:{
			result:scalar_String;
			clientMutationId?:scalar_String
		};
	};
	export type PersonPreviousValues = {
		payload:{
			/**
			 * The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.
			*/
			birthYear?:scalar_String;
			createdAt:scalar_DateTime;
			/**
			 * The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye.
			*/
			eyeColor:PERSON_EYE_COLOR[];
			/**
			 *  The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender.
			*/
			gender?:PERSON_GENDER;
			/**
			 * The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair.
			*/
			hairColor:PERSON_HAIR_COLOR[];
			/**
			 * The height of the person in centimeters.
			*/
			height?:scalar_Int;
			id:scalar_ID;
			/**
			 * indicates if the record is published
			*/
			isPublished:scalar_Boolean;
			/**
			 * The mass of the person in kilograms.
			*/
			mass?:scalar_Float;
			/**
			 * The name of this person.
			*/
			name:scalar_String;
			/**
			 * The skin color of this person.
			*/
			skinColor:PERSON_SKIN_COLOR[];
			updatedAt:scalar_DateTime
		};
	};
	export type PersonSubscriptionFilter = {
			/**
			 * Logical AND on all given filters.
			*/
			AND:PersonSubscriptionFilter[];
			/**
			 * Logical OR on all given filters.
			*/
			OR:PersonSubscriptionFilter[];
			/**
			 * The subscription event gets dispatched when it's listed in mutation_in
			*/
			mutation_in:_ModelMutationType[];
			/**
			 * The subscription event gets only dispatched when one of the updated fields names is included in this list
			*/
			updatedFields_contains?:scalar_String;
			/**
			 * The subscription event gets only dispatched when all of the field names included in this list have been updated
			*/
			updatedFields_contains_every:scalar_String[];
			/**
			 * The subscription event gets only dispatched when some of the field names included in this list have been updated
			*/
			updatedFields_contains_some:scalar_String[];
			node?:PersonSubscriptionFilterNode
		};
	export type PersonSubscriptionFilterNode = {
			birthYear?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			birthYear_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			birthYear_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			birthYear_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			birthYear_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			birthYear_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			birthYear_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			birthYear_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			birthYear_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			birthYear_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			birthYear_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			birthYear_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			birthYear_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			birthYear_not_ends_with?:scalar_String;
			createdAt?:scalar_DateTime;
			/**
			 * All values that are not equal to given value.
			*/
			createdAt_not?:scalar_DateTime;
			/**
			 * All values that are contained in given list.
			*/
			createdAt_in:scalar_DateTime[];
			/**
			 * All values that are not contained in given list.
			*/
			createdAt_not_in:scalar_DateTime[];
			/**
			 * All values less than the given value.
			*/
			createdAt_lt?:scalar_DateTime;
			/**
			 * All values less than or equal the given value.
			*/
			createdAt_lte?:scalar_DateTime;
			/**
			 * All values greater than the given value.
			*/
			createdAt_gt?:scalar_DateTime;
			/**
			 * All values greater than or equal the given value.
			*/
			createdAt_gte?:scalar_DateTime;
			gender?:PERSON_GENDER;
			/**
			 * All values that are not equal to given value.
			*/
			gender_not?:PERSON_GENDER;
			/**
			 * All values that are contained in given list.
			*/
			gender_in:PERSON_GENDER[];
			/**
			 * All values that are not contained in given list.
			*/
			gender_not_in:PERSON_GENDER[];
			height?:scalar_Int;
			/**
			 * All values that are not equal to given value.
			*/
			height_not?:scalar_Int;
			/**
			 * All values that are contained in given list.
			*/
			height_in:scalar_Int[];
			/**
			 * All values that are not contained in given list.
			*/
			height_not_in:scalar_Int[];
			/**
			 * All values less than the given value.
			*/
			height_lt?:scalar_Int;
			/**
			 * All values less than or equal the given value.
			*/
			height_lte?:scalar_Int;
			/**
			 * All values greater than the given value.
			*/
			height_gt?:scalar_Int;
			/**
			 * All values greater than or equal the given value.
			*/
			height_gte?:scalar_Int;
			id?:scalar_ID;
			/**
			 * All values that are not equal to given value.
			*/
			id_not?:scalar_ID;
			/**
			 * All values that are contained in given list.
			*/
			id_in:scalar_ID[];
			/**
			 * All values that are not contained in given list.
			*/
			id_not_in:scalar_ID[];
			/**
			 * All values less than the given value.
			*/
			id_lt?:scalar_ID;
			/**
			 * All values less than or equal the given value.
			*/
			id_lte?:scalar_ID;
			/**
			 * All values greater than the given value.
			*/
			id_gt?:scalar_ID;
			/**
			 * All values greater than or equal the given value.
			*/
			id_gte?:scalar_ID;
			/**
			 * All values containing the given string.
			*/
			id_contains?:scalar_ID;
			/**
			 * All values not containing the given string.
			*/
			id_not_contains?:scalar_ID;
			/**
			 * All values starting with the given string.
			*/
			id_starts_with?:scalar_ID;
			/**
			 * All values not starting with the given string.
			*/
			id_not_starts_with?:scalar_ID;
			/**
			 * All values ending with the given string.
			*/
			id_ends_with?:scalar_ID;
			/**
			 * All values not ending with the given string.
			*/
			id_not_ends_with?:scalar_ID;
			isPublished?:scalar_Boolean;
			/**
			 * All values that are not equal to given value.
			*/
			isPublished_not?:scalar_Boolean;
			mass?:scalar_Float;
			/**
			 * All values that are not equal to given value.
			*/
			mass_not?:scalar_Float;
			/**
			 * All values that are contained in given list.
			*/
			mass_in:scalar_Float[];
			/**
			 * All values that are not contained in given list.
			*/
			mass_not_in:scalar_Float[];
			/**
			 * All values less than the given value.
			*/
			mass_lt?:scalar_Float;
			/**
			 * All values less than or equal the given value.
			*/
			mass_lte?:scalar_Float;
			/**
			 * All values greater than the given value.
			*/
			mass_gt?:scalar_Float;
			/**
			 * All values greater than or equal the given value.
			*/
			mass_gte?:scalar_Float;
			name?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			name_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			name_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			name_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			name_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			name_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			name_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			name_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			name_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			name_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			name_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			name_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			name_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			name_not_ends_with?:scalar_String;
			updatedAt?:scalar_DateTime;
			/**
			 * All values that are not equal to given value.
			*/
			updatedAt_not?:scalar_DateTime;
			/**
			 * All values that are contained in given list.
			*/
			updatedAt_in:scalar_DateTime[];
			/**
			 * All values that are not contained in given list.
			*/
			updatedAt_not_in:scalar_DateTime[];
			/**
			 * All values less than the given value.
			*/
			updatedAt_lt?:scalar_DateTime;
			/**
			 * All values less than or equal the given value.
			*/
			updatedAt_lte?:scalar_DateTime;
			/**
			 * All values greater than the given value.
			*/
			updatedAt_gt?:scalar_DateTime;
			/**
			 * All values greater than or equal the given value.
			*/
			updatedAt_gte?:scalar_DateTime;
			films_every?:FilmFilter;
			films_some?:FilmFilter;
			films_none?:FilmFilter;
			homeworld?:PlanetFilter;
			species_every?:SpeciesFilter;
			species_some?:SpeciesFilter;
			species_none?:SpeciesFilter;
			starships_every?:StarshipFilter;
			starships_some?:StarshipFilter;
			starships_none?:StarshipFilter;
			vehicles_every?:VehicleFilter;
			vehicles_some?:VehicleFilter;
			vehicles_none?:VehicleFilter
		};
	export type PersonSubscriptionPayload = {
		payload:{
			mutation:_ModelMutationType;
			node?:query["Person"];
			updatedFields:scalar_String[];
			previousValues?:PersonPreviousValues
		};
	};
	export type PersonfilmsFilm = {
			/**
			 * The name of the director of this film.
			*/
			director?:scalar_String;
			/**
			 * The episode number of this film.
			*/
			episodeId:scalar_Int;
			/**
			 * indicates if the record is published
			*/
			isPublished?:scalar_Boolean;
			/**
			 * The opening paragraphs at the beginning of this film.
			*/
			openingCrawl?:scalar_String;
			/**
			 * The names of the producers of this film.
			*/
			producers:scalar_String[];
			/**
			 *  The ISO 8601 date format of film release at original creator country.
			*/
			releaseDate?:scalar_DateTime;
			/**
			 * The title of this film
			*/
			title:scalar_String;
			charactersIds:scalar_ID[];
			characters:FilmcharactersPerson[];
			planetsIds:scalar_ID[];
			planets:FilmplanetsPlanet[];
			speciesIds:scalar_ID[];
			species:FilmspeciesSpecies[];
			starshipsIds:scalar_ID[];
			starships:FilmstarshipsStarship[];
			vehiclesIds:scalar_ID[];
			vehicles:FilmvehiclesVehicle[]
		};
	export type PersonhomeworldPlanet = {
			/**
			 * The climate of this planet.
			*/
			climate:scalar_String[];
			/**
			 * The diameter of this planet in kilometers.
			*/
			diameter?:scalar_Int;
			/**
			 * A number denoting the gravity of this planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
			*/
			gravity?:scalar_String;
			/**
			 * indicates if the record is published
			*/
			isPublished?:scalar_Boolean;
			/**
			 * The name of the planet
			*/
			name:scalar_String;
			/**
			 * The number of standard days it takes for this planet to complete a single orbit of its local star.
			*/
			orbitalPeriod?:scalar_Int;
			/**
			 * The average population of sentient beings inhabiting this planet.
			*/
			population?:scalar_Float;
			/**
			 * The number of standard hours it takes for this planet to complete a single rotation on its axis.
			*/
			rotationPeriod?:scalar_Int;
			/**
			 * The percentage of the planet surface that is naturally occurring water or bodies of water.
			*/
			surfaceWater?:scalar_Float;
			/**
			 * The terrain of this planet.
			*/
			terrain:scalar_String[];
			filmsIds:scalar_ID[];
			films:PlanetfilmsFilm[];
			residentsIds:scalar_ID[];
			residents:PlanetresidentsPerson[]
		};
	export type PersonspeciesSpecies = {
			/**
			 * The average height of this species in centimeters.
			*/
			averageHeight?:scalar_Int;
			/**
			 * The average lifespan of this species in years.
			*/
			averageLifespan?:scalar_Int;
			/**
			 * The classification of this species, such as "mammal" or "reptile".
			*/
			classification?:scalar_String;
			/**
			 * The designation of this species, such as "sentient".
			*/
			designation?:scalar_String;
			/**
			 * The eye colors for this species, "UNKNOWN" if not known, null if this species does not typically have eyes.
			*/
			eyeColor:SPECIES_EYE_COLOR[];
			/**
			 * The hair colors for this species, "UNKNOWN" if not known, null if this species does not typically have hairs.
			*/
			hairColor:SPECIES_HAIR_COLOR[];
			/**
			 * indicates if the record is published
			*/
			isPublished?:scalar_Boolean;
			/**
			 * The language commonly spoken by this species.
			*/
			language?:scalar_String;
			/**
			 * The name of this species.
			*/
			name:scalar_String;
			/**
			 * The skin colors for this species, "UNKNOWN" if not known, null if this species does not typically have a skin.
			*/
			skinColor:SPECIES_SKIN_COLOR[];
			filmsIds:scalar_ID[];
			films:SpeciesfilmsFilm[];
			peopleIds:scalar_ID[];
			people:SpeciespeoplePerson[]
		};
	export type PersonstarshipsStarship = {
			/**
			 * The maximum number of kilograms that this starship can transport.
			*/
			cargoCapacity?:scalar_Float;
			/**
			 * The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation"
			*/
			class?:scalar_String;
			/**
			 * The maximum length of time that this starship can provide consumables for its entire crew without having to resupply.
			*/
			consumables?:scalar_String;
			/**
			 *  The cost of this starship new, in galactic credits.
			*/
			costInCredits?:scalar_Float;
			/**
			 * The number of personnel needed to run or pilot this starship.
			*/
			crew?:scalar_Int;
			/**
			 * The class of this starships hyperdrive.
			*/
			hyperdriveRating?:scalar_Float;
			/**
			 * indicates if the record is published
			*/
			isPublished?:scalar_Boolean;
			/**
			 * The length of this starship in meters.
			*/
			length?:scalar_Float;
			/**
			 * The manufacturer of this starship.
			*/
			manufacturer:scalar_String[];
			/**
			 *  The maximum speed of this starship in the atmosphere. null if this starship is incapable of atmospheric flight.
			*/
			maxAtmospheringSpeed?:scalar_Int;
			/**
			 * The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe.
			*/
			mglt?:scalar_Int;
			/**
			 * The name of this starship. The common name, such as "Death Star".
			*/
			name:scalar_String;
			/**
			 *  The number of non-essential people this starship can transport.
			*/
			passengers?:scalar_Int;
			filmsIds:scalar_ID[];
			films:StarshipfilmsFilm[];
			pilotsIds:scalar_ID[];
			pilots:StarshippilotsPerson[]
		};
	export type PersonvehiclesVehicle = {
			/**
			 * The maximum number of kilograms that this vehicle can transport.
			*/
			cargoCapacity?:scalar_Int;
			/**
			 *  The class of this vehicle, such as "Wheeled" or "Repulsorcraft".
			*/
			class?:scalar_String;
			/**
			 * The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply.
			*/
			consumables?:scalar_String;
			/**
			 * The cost of this vehicle new, in Galactic Credits.
			*/
			costInCredits?:scalar_Int;
			/**
			 * The number of personnel needed to run or pilot this vehicle.
			*/
			crew?:scalar_Int;
			/**
			 * indicates if the record is published
			*/
			isPublished?:scalar_Boolean;
			/**
			 *  The length of this vehicle in meters.
			*/
			length?:scalar_Float;
			/**
			 * The manufacturer of this vehicle.
			*/
			manufacturer:scalar_String[];
			/**
			 * The maximum speed of this vehicle in the atmosphere.
			*/
			maxAtmospheringSpeed?:scalar_Int;
			/**
			 * The model or official name of this vehicle. Such as "All-Terrain Attack Transport".
			*/
			model?:scalar_String;
			/**
			 * The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike".
			*/
			name:scalar_String;
			/**
			 * The number of non-essential people this vehicle can transport.
			*/
			passengers?:scalar_Int;
			filmsIds:scalar_ID[];
			films:VehiclefilmsFilm[];
			pilotsIds:scalar_ID[];
			pilots:VehiclepilotsPerson[]
		};
	export type PlanetPreviousValues = {
		payload:{
			/**
			 * The climate of this planet.
			*/
			climate:scalar_String[];
			createdAt:scalar_DateTime;
			/**
			 * The diameter of this planet in kilometers.
			*/
			diameter?:scalar_Int;
			/**
			 * A number denoting the gravity of this planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
			*/
			gravity?:scalar_String;
			id:scalar_ID;
			/**
			 * indicates if the record is published
			*/
			isPublished:scalar_Boolean;
			/**
			 * The name of the planet
			*/
			name:scalar_String;
			/**
			 * The number of standard days it takes for this planet to complete a single orbit of its local star.
			*/
			orbitalPeriod?:scalar_Int;
			/**
			 * The average population of sentient beings inhabiting this planet.
			*/
			population?:scalar_Float;
			/**
			 * The number of standard hours it takes for this planet to complete a single rotation on its axis.
			*/
			rotationPeriod?:scalar_Int;
			/**
			 * The percentage of the planet surface that is naturally occurring water or bodies of water.
			*/
			surfaceWater?:scalar_Float;
			/**
			 * The terrain of this planet.
			*/
			terrain:scalar_String[];
			updatedAt:scalar_DateTime
		};
	};
	export type PlanetSubscriptionFilter = {
			/**
			 * Logical AND on all given filters.
			*/
			AND:PlanetSubscriptionFilter[];
			/**
			 * Logical OR on all given filters.
			*/
			OR:PlanetSubscriptionFilter[];
			/**
			 * The subscription event gets dispatched when it's listed in mutation_in
			*/
			mutation_in:_ModelMutationType[];
			/**
			 * The subscription event gets only dispatched when one of the updated fields names is included in this list
			*/
			updatedFields_contains?:scalar_String;
			/**
			 * The subscription event gets only dispatched when all of the field names included in this list have been updated
			*/
			updatedFields_contains_every:scalar_String[];
			/**
			 * The subscription event gets only dispatched when some of the field names included in this list have been updated
			*/
			updatedFields_contains_some:scalar_String[];
			node?:PlanetSubscriptionFilterNode
		};
	export type PlanetSubscriptionFilterNode = {
			createdAt?:scalar_DateTime;
			/**
			 * All values that are not equal to given value.
			*/
			createdAt_not?:scalar_DateTime;
			/**
			 * All values that are contained in given list.
			*/
			createdAt_in:scalar_DateTime[];
			/**
			 * All values that are not contained in given list.
			*/
			createdAt_not_in:scalar_DateTime[];
			/**
			 * All values less than the given value.
			*/
			createdAt_lt?:scalar_DateTime;
			/**
			 * All values less than or equal the given value.
			*/
			createdAt_lte?:scalar_DateTime;
			/**
			 * All values greater than the given value.
			*/
			createdAt_gt?:scalar_DateTime;
			/**
			 * All values greater than or equal the given value.
			*/
			createdAt_gte?:scalar_DateTime;
			diameter?:scalar_Int;
			/**
			 * All values that are not equal to given value.
			*/
			diameter_not?:scalar_Int;
			/**
			 * All values that are contained in given list.
			*/
			diameter_in:scalar_Int[];
			/**
			 * All values that are not contained in given list.
			*/
			diameter_not_in:scalar_Int[];
			/**
			 * All values less than the given value.
			*/
			diameter_lt?:scalar_Int;
			/**
			 * All values less than or equal the given value.
			*/
			diameter_lte?:scalar_Int;
			/**
			 * All values greater than the given value.
			*/
			diameter_gt?:scalar_Int;
			/**
			 * All values greater than or equal the given value.
			*/
			diameter_gte?:scalar_Int;
			gravity?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			gravity_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			gravity_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			gravity_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			gravity_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			gravity_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			gravity_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			gravity_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			gravity_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			gravity_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			gravity_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			gravity_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			gravity_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			gravity_not_ends_with?:scalar_String;
			id?:scalar_ID;
			/**
			 * All values that are not equal to given value.
			*/
			id_not?:scalar_ID;
			/**
			 * All values that are contained in given list.
			*/
			id_in:scalar_ID[];
			/**
			 * All values that are not contained in given list.
			*/
			id_not_in:scalar_ID[];
			/**
			 * All values less than the given value.
			*/
			id_lt?:scalar_ID;
			/**
			 * All values less than or equal the given value.
			*/
			id_lte?:scalar_ID;
			/**
			 * All values greater than the given value.
			*/
			id_gt?:scalar_ID;
			/**
			 * All values greater than or equal the given value.
			*/
			id_gte?:scalar_ID;
			/**
			 * All values containing the given string.
			*/
			id_contains?:scalar_ID;
			/**
			 * All values not containing the given string.
			*/
			id_not_contains?:scalar_ID;
			/**
			 * All values starting with the given string.
			*/
			id_starts_with?:scalar_ID;
			/**
			 * All values not starting with the given string.
			*/
			id_not_starts_with?:scalar_ID;
			/**
			 * All values ending with the given string.
			*/
			id_ends_with?:scalar_ID;
			/**
			 * All values not ending with the given string.
			*/
			id_not_ends_with?:scalar_ID;
			isPublished?:scalar_Boolean;
			/**
			 * All values that are not equal to given value.
			*/
			isPublished_not?:scalar_Boolean;
			name?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			name_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			name_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			name_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			name_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			name_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			name_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			name_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			name_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			name_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			name_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			name_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			name_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			name_not_ends_with?:scalar_String;
			orbitalPeriod?:scalar_Int;
			/**
			 * All values that are not equal to given value.
			*/
			orbitalPeriod_not?:scalar_Int;
			/**
			 * All values that are contained in given list.
			*/
			orbitalPeriod_in:scalar_Int[];
			/**
			 * All values that are not contained in given list.
			*/
			orbitalPeriod_not_in:scalar_Int[];
			/**
			 * All values less than the given value.
			*/
			orbitalPeriod_lt?:scalar_Int;
			/**
			 * All values less than or equal the given value.
			*/
			orbitalPeriod_lte?:scalar_Int;
			/**
			 * All values greater than the given value.
			*/
			orbitalPeriod_gt?:scalar_Int;
			/**
			 * All values greater than or equal the given value.
			*/
			orbitalPeriod_gte?:scalar_Int;
			population?:scalar_Float;
			/**
			 * All values that are not equal to given value.
			*/
			population_not?:scalar_Float;
			/**
			 * All values that are contained in given list.
			*/
			population_in:scalar_Float[];
			/**
			 * All values that are not contained in given list.
			*/
			population_not_in:scalar_Float[];
			/**
			 * All values less than the given value.
			*/
			population_lt?:scalar_Float;
			/**
			 * All values less than or equal the given value.
			*/
			population_lte?:scalar_Float;
			/**
			 * All values greater than the given value.
			*/
			population_gt?:scalar_Float;
			/**
			 * All values greater than or equal the given value.
			*/
			population_gte?:scalar_Float;
			rotationPeriod?:scalar_Int;
			/**
			 * All values that are not equal to given value.
			*/
			rotationPeriod_not?:scalar_Int;
			/**
			 * All values that are contained in given list.
			*/
			rotationPeriod_in:scalar_Int[];
			/**
			 * All values that are not contained in given list.
			*/
			rotationPeriod_not_in:scalar_Int[];
			/**
			 * All values less than the given value.
			*/
			rotationPeriod_lt?:scalar_Int;
			/**
			 * All values less than or equal the given value.
			*/
			rotationPeriod_lte?:scalar_Int;
			/**
			 * All values greater than the given value.
			*/
			rotationPeriod_gt?:scalar_Int;
			/**
			 * All values greater than or equal the given value.
			*/
			rotationPeriod_gte?:scalar_Int;
			surfaceWater?:scalar_Float;
			/**
			 * All values that are not equal to given value.
			*/
			surfaceWater_not?:scalar_Float;
			/**
			 * All values that are contained in given list.
			*/
			surfaceWater_in:scalar_Float[];
			/**
			 * All values that are not contained in given list.
			*/
			surfaceWater_not_in:scalar_Float[];
			/**
			 * All values less than the given value.
			*/
			surfaceWater_lt?:scalar_Float;
			/**
			 * All values less than or equal the given value.
			*/
			surfaceWater_lte?:scalar_Float;
			/**
			 * All values greater than the given value.
			*/
			surfaceWater_gt?:scalar_Float;
			/**
			 * All values greater than or equal the given value.
			*/
			surfaceWater_gte?:scalar_Float;
			updatedAt?:scalar_DateTime;
			/**
			 * All values that are not equal to given value.
			*/
			updatedAt_not?:scalar_DateTime;
			/**
			 * All values that are contained in given list.
			*/
			updatedAt_in:scalar_DateTime[];
			/**
			 * All values that are not contained in given list.
			*/
			updatedAt_not_in:scalar_DateTime[];
			/**
			 * All values less than the given value.
			*/
			updatedAt_lt?:scalar_DateTime;
			/**
			 * All values less than or equal the given value.
			*/
			updatedAt_lte?:scalar_DateTime;
			/**
			 * All values greater than the given value.
			*/
			updatedAt_gt?:scalar_DateTime;
			/**
			 * All values greater than or equal the given value.
			*/
			updatedAt_gte?:scalar_DateTime;
			films_every?:FilmFilter;
			films_some?:FilmFilter;
			films_none?:FilmFilter;
			residents_every?:PersonFilter;
			residents_some?:PersonFilter;
			residents_none?:PersonFilter
		};
	export type PlanetSubscriptionPayload = {
		payload:{
			mutation:_ModelMutationType;
			node?:query["Planet"];
			updatedFields:scalar_String[];
			previousValues?:PlanetPreviousValues
		};
	};
	export type PlanetfilmsFilm = {
			/**
			 * The name of the director of this film.
			*/
			director?:scalar_String;
			/**
			 * The episode number of this film.
			*/
			episodeId:scalar_Int;
			/**
			 * indicates if the record is published
			*/
			isPublished?:scalar_Boolean;
			/**
			 * The opening paragraphs at the beginning of this film.
			*/
			openingCrawl?:scalar_String;
			/**
			 * The names of the producers of this film.
			*/
			producers:scalar_String[];
			/**
			 *  The ISO 8601 date format of film release at original creator country.
			*/
			releaseDate?:scalar_DateTime;
			/**
			 * The title of this film
			*/
			title:scalar_String;
			charactersIds:scalar_ID[];
			characters:FilmcharactersPerson[];
			planetsIds:scalar_ID[];
			planets:FilmplanetsPlanet[];
			speciesIds:scalar_ID[];
			species:FilmspeciesSpecies[];
			starshipsIds:scalar_ID[];
			starships:FilmstarshipsStarship[];
			vehiclesIds:scalar_ID[];
			vehicles:FilmvehiclesVehicle[]
		};
	export type PlanetresidentsPerson = {
			/**
			 * The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.
			*/
			birthYear?:scalar_String;
			/**
			 * The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye.
			*/
			eyeColor:PERSON_EYE_COLOR[];
			/**
			 *  The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender.
			*/
			gender?:PERSON_GENDER;
			/**
			 * The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair.
			*/
			hairColor:PERSON_HAIR_COLOR[];
			/**
			 * The height of the person in centimeters.
			*/
			height?:scalar_Int;
			/**
			 * indicates if the record is published
			*/
			isPublished?:scalar_Boolean;
			/**
			 * The mass of the person in kilograms.
			*/
			mass?:scalar_Float;
			/**
			 * The name of this person.
			*/
			name:scalar_String;
			/**
			 * The skin color of this person.
			*/
			skinColor:PERSON_SKIN_COLOR[];
			filmsIds:scalar_ID[];
			films:PersonfilmsFilm[];
			speciesIds:scalar_ID[];
			species:PersonspeciesSpecies[];
			starshipsIds:scalar_ID[];
			starships:PersonstarshipsStarship[];
			vehiclesIds:scalar_ID[];
			vehicles:PersonvehiclesVehicle[]
		};
	export type RemoveFromFilmPlanetsPayload = {
		payload:{
			filmsFilm?:query["Film"];
			planetsPlanet?:query["Planet"]
		};
	};
	export type RemoveFromFilmSpeciesPayload = {
		payload:{
			filmsFilm?:query["Film"];
			speciesSpecies?:query["Species"]
		};
	};
	export type RemoveFromFilmStarshipsPayload = {
		payload:{
			filmsFilm?:query["Film"];
			starshipsStarship?:query["Starship"]
		};
	};
	export type RemoveFromFilmVehiclesPayload = {
		payload:{
			filmsFilm?:query["Film"];
			vehiclesVehicle?:query["Vehicle"]
		};
	};
	export type RemoveFromPeopleFilmPayload = {
		payload:{
			charactersPerson?:query["Person"];
			filmsFilm?:query["Film"]
		};
	};
	export type RemoveFromPeoplePlanetPayload = {
		payload:{
			residentsPerson?:query["Person"];
			homeworldPlanet?:query["Planet"]
		};
	};
	export type RemoveFromPeopleSpeciesPayload = {
		payload:{
			peoplePerson?:query["Person"];
			speciesSpecies?:query["Species"]
		};
	};
	export type RemoveFromPeopleStarshipsPayload = {
		payload:{
			pilotsPerson?:query["Person"];
			starshipsStarship?:query["Starship"]
		};
	};
	export type RemoveFromPeopleVehiclesPayload = {
		payload:{
			pilotsPerson?:query["Person"];
			vehiclesVehicle?:query["Vehicle"]
		};
	};
	export type SpeciesPreviousValues = {
		payload:{
			/**
			 * The average height of this species in centimeters.
			*/
			averageHeight?:scalar_Int;
			/**
			 * The average lifespan of this species in years.
			*/
			averageLifespan?:scalar_Int;
			/**
			 * The classification of this species, such as "mammal" or "reptile".
			*/
			classification?:scalar_String;
			createdAt:scalar_DateTime;
			/**
			 * The designation of this species, such as "sentient".
			*/
			designation?:scalar_String;
			/**
			 * The eye colors for this species, "UNKNOWN" if not known, null if this species does not typically have eyes.
			*/
			eyeColor:SPECIES_EYE_COLOR[];
			/**
			 * The hair colors for this species, "UNKNOWN" if not known, null if this species does not typically have hairs.
			*/
			hairColor:SPECIES_HAIR_COLOR[];
			id:scalar_ID;
			/**
			 * indicates if the record is published
			*/
			isPublished:scalar_Boolean;
			/**
			 * The language commonly spoken by this species.
			*/
			language?:scalar_String;
			/**
			 * The name of this species.
			*/
			name:scalar_String;
			/**
			 * The skin colors for this species, "UNKNOWN" if not known, null if this species does not typically have a skin.
			*/
			skinColor:SPECIES_SKIN_COLOR[];
			updatedAt:scalar_DateTime
		};
	};
	export type SpeciesSubscriptionFilter = {
			/**
			 * Logical AND on all given filters.
			*/
			AND:SpeciesSubscriptionFilter[];
			/**
			 * Logical OR on all given filters.
			*/
			OR:SpeciesSubscriptionFilter[];
			/**
			 * The subscription event gets dispatched when it's listed in mutation_in
			*/
			mutation_in:_ModelMutationType[];
			/**
			 * The subscription event gets only dispatched when one of the updated fields names is included in this list
			*/
			updatedFields_contains?:scalar_String;
			/**
			 * The subscription event gets only dispatched when all of the field names included in this list have been updated
			*/
			updatedFields_contains_every:scalar_String[];
			/**
			 * The subscription event gets only dispatched when some of the field names included in this list have been updated
			*/
			updatedFields_contains_some:scalar_String[];
			node?:SpeciesSubscriptionFilterNode
		};
	export type SpeciesSubscriptionFilterNode = {
			averageHeight?:scalar_Int;
			/**
			 * All values that are not equal to given value.
			*/
			averageHeight_not?:scalar_Int;
			/**
			 * All values that are contained in given list.
			*/
			averageHeight_in:scalar_Int[];
			/**
			 * All values that are not contained in given list.
			*/
			averageHeight_not_in:scalar_Int[];
			/**
			 * All values less than the given value.
			*/
			averageHeight_lt?:scalar_Int;
			/**
			 * All values less than or equal the given value.
			*/
			averageHeight_lte?:scalar_Int;
			/**
			 * All values greater than the given value.
			*/
			averageHeight_gt?:scalar_Int;
			/**
			 * All values greater than or equal the given value.
			*/
			averageHeight_gte?:scalar_Int;
			averageLifespan?:scalar_Int;
			/**
			 * All values that are not equal to given value.
			*/
			averageLifespan_not?:scalar_Int;
			/**
			 * All values that are contained in given list.
			*/
			averageLifespan_in:scalar_Int[];
			/**
			 * All values that are not contained in given list.
			*/
			averageLifespan_not_in:scalar_Int[];
			/**
			 * All values less than the given value.
			*/
			averageLifespan_lt?:scalar_Int;
			/**
			 * All values less than or equal the given value.
			*/
			averageLifespan_lte?:scalar_Int;
			/**
			 * All values greater than the given value.
			*/
			averageLifespan_gt?:scalar_Int;
			/**
			 * All values greater than or equal the given value.
			*/
			averageLifespan_gte?:scalar_Int;
			classification?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			classification_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			classification_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			classification_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			classification_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			classification_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			classification_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			classification_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			classification_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			classification_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			classification_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			classification_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			classification_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			classification_not_ends_with?:scalar_String;
			createdAt?:scalar_DateTime;
			/**
			 * All values that are not equal to given value.
			*/
			createdAt_not?:scalar_DateTime;
			/**
			 * All values that are contained in given list.
			*/
			createdAt_in:scalar_DateTime[];
			/**
			 * All values that are not contained in given list.
			*/
			createdAt_not_in:scalar_DateTime[];
			/**
			 * All values less than the given value.
			*/
			createdAt_lt?:scalar_DateTime;
			/**
			 * All values less than or equal the given value.
			*/
			createdAt_lte?:scalar_DateTime;
			/**
			 * All values greater than the given value.
			*/
			createdAt_gt?:scalar_DateTime;
			/**
			 * All values greater than or equal the given value.
			*/
			createdAt_gte?:scalar_DateTime;
			designation?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			designation_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			designation_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			designation_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			designation_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			designation_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			designation_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			designation_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			designation_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			designation_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			designation_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			designation_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			designation_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			designation_not_ends_with?:scalar_String;
			id?:scalar_ID;
			/**
			 * All values that are not equal to given value.
			*/
			id_not?:scalar_ID;
			/**
			 * All values that are contained in given list.
			*/
			id_in:scalar_ID[];
			/**
			 * All values that are not contained in given list.
			*/
			id_not_in:scalar_ID[];
			/**
			 * All values less than the given value.
			*/
			id_lt?:scalar_ID;
			/**
			 * All values less than or equal the given value.
			*/
			id_lte?:scalar_ID;
			/**
			 * All values greater than the given value.
			*/
			id_gt?:scalar_ID;
			/**
			 * All values greater than or equal the given value.
			*/
			id_gte?:scalar_ID;
			/**
			 * All values containing the given string.
			*/
			id_contains?:scalar_ID;
			/**
			 * All values not containing the given string.
			*/
			id_not_contains?:scalar_ID;
			/**
			 * All values starting with the given string.
			*/
			id_starts_with?:scalar_ID;
			/**
			 * All values not starting with the given string.
			*/
			id_not_starts_with?:scalar_ID;
			/**
			 * All values ending with the given string.
			*/
			id_ends_with?:scalar_ID;
			/**
			 * All values not ending with the given string.
			*/
			id_not_ends_with?:scalar_ID;
			isPublished?:scalar_Boolean;
			/**
			 * All values that are not equal to given value.
			*/
			isPublished_not?:scalar_Boolean;
			language?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			language_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			language_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			language_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			language_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			language_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			language_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			language_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			language_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			language_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			language_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			language_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			language_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			language_not_ends_with?:scalar_String;
			name?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			name_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			name_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			name_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			name_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			name_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			name_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			name_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			name_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			name_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			name_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			name_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			name_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			name_not_ends_with?:scalar_String;
			updatedAt?:scalar_DateTime;
			/**
			 * All values that are not equal to given value.
			*/
			updatedAt_not?:scalar_DateTime;
			/**
			 * All values that are contained in given list.
			*/
			updatedAt_in:scalar_DateTime[];
			/**
			 * All values that are not contained in given list.
			*/
			updatedAt_not_in:scalar_DateTime[];
			/**
			 * All values less than the given value.
			*/
			updatedAt_lt?:scalar_DateTime;
			/**
			 * All values less than or equal the given value.
			*/
			updatedAt_lte?:scalar_DateTime;
			/**
			 * All values greater than the given value.
			*/
			updatedAt_gt?:scalar_DateTime;
			/**
			 * All values greater than or equal the given value.
			*/
			updatedAt_gte?:scalar_DateTime;
			films_every?:FilmFilter;
			films_some?:FilmFilter;
			films_none?:FilmFilter;
			people_every?:PersonFilter;
			people_some?:PersonFilter;
			people_none?:PersonFilter
		};
	export type SpeciesSubscriptionPayload = {
		payload:{
			mutation:_ModelMutationType;
			node?:query["Species"];
			updatedFields:scalar_String[];
			previousValues?:SpeciesPreviousValues
		};
	};
	export type SpeciesfilmsFilm = {
			/**
			 * The name of the director of this film.
			*/
			director?:scalar_String;
			/**
			 * The episode number of this film.
			*/
			episodeId:scalar_Int;
			/**
			 * indicates if the record is published
			*/
			isPublished?:scalar_Boolean;
			/**
			 * The opening paragraphs at the beginning of this film.
			*/
			openingCrawl?:scalar_String;
			/**
			 * The names of the producers of this film.
			*/
			producers:scalar_String[];
			/**
			 *  The ISO 8601 date format of film release at original creator country.
			*/
			releaseDate?:scalar_DateTime;
			/**
			 * The title of this film
			*/
			title:scalar_String;
			charactersIds:scalar_ID[];
			characters:FilmcharactersPerson[];
			planetsIds:scalar_ID[];
			planets:FilmplanetsPlanet[];
			speciesIds:scalar_ID[];
			species:FilmspeciesSpecies[];
			starshipsIds:scalar_ID[];
			starships:FilmstarshipsStarship[];
			vehiclesIds:scalar_ID[];
			vehicles:FilmvehiclesVehicle[]
		};
	export type SpeciespeoplePerson = {
			/**
			 * The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.
			*/
			birthYear?:scalar_String;
			/**
			 * The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye.
			*/
			eyeColor:PERSON_EYE_COLOR[];
			/**
			 *  The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender.
			*/
			gender?:PERSON_GENDER;
			/**
			 * The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair.
			*/
			hairColor:PERSON_HAIR_COLOR[];
			/**
			 * The height of the person in centimeters.
			*/
			height?:scalar_Int;
			/**
			 * indicates if the record is published
			*/
			isPublished?:scalar_Boolean;
			/**
			 * The mass of the person in kilograms.
			*/
			mass?:scalar_Float;
			/**
			 * The name of this person.
			*/
			name:scalar_String;
			/**
			 * The skin color of this person.
			*/
			skinColor:PERSON_SKIN_COLOR[];
			homeworldId?:scalar_ID;
			homeworld?:PersonhomeworldPlanet;
			filmsIds:scalar_ID[];
			films:PersonfilmsFilm[];
			speciesIds:scalar_ID[];
			species:PersonspeciesSpecies[];
			starshipsIds:scalar_ID[];
			starships:PersonstarshipsStarship[];
			vehiclesIds:scalar_ID[];
			vehicles:PersonvehiclesVehicle[]
		};
	export type StarshipPreviousValues = {
		payload:{
			/**
			 * The maximum number of kilograms that this starship can transport.
			*/
			cargoCapacity?:scalar_Float;
			/**
			 * The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation"
			*/
			class?:scalar_String;
			/**
			 * The maximum length of time that this starship can provide consumables for its entire crew without having to resupply.
			*/
			consumables?:scalar_String;
			/**
			 *  The cost of this starship new, in galactic credits.
			*/
			costInCredits?:scalar_Float;
			createdAt:scalar_DateTime;
			/**
			 * The number of personnel needed to run or pilot this starship.
			*/
			crew?:scalar_Int;
			/**
			 * The class of this starships hyperdrive.
			*/
			hyperdriveRating?:scalar_Float;
			id:scalar_ID;
			/**
			 * indicates if the record is published
			*/
			isPublished:scalar_Boolean;
			/**
			 * The length of this starship in meters.
			*/
			length?:scalar_Float;
			/**
			 * The manufacturer of this starship.
			*/
			manufacturer:scalar_String[];
			/**
			 *  The maximum speed of this starship in the atmosphere. null if this starship is incapable of atmospheric flight.
			*/
			maxAtmospheringSpeed?:scalar_Int;
			/**
			 * The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe.
			*/
			mglt?:scalar_Int;
			/**
			 * The name of this starship. The common name, such as "Death Star".
			*/
			name:scalar_String;
			/**
			 *  The number of non-essential people this starship can transport.
			*/
			passengers?:scalar_Int;
			updatedAt:scalar_DateTime
		};
	};
	export type StarshipSubscriptionFilter = {
			/**
			 * Logical AND on all given filters.
			*/
			AND:StarshipSubscriptionFilter[];
			/**
			 * Logical OR on all given filters.
			*/
			OR:StarshipSubscriptionFilter[];
			/**
			 * The subscription event gets dispatched when it's listed in mutation_in
			*/
			mutation_in:_ModelMutationType[];
			/**
			 * The subscription event gets only dispatched when one of the updated fields names is included in this list
			*/
			updatedFields_contains?:scalar_String;
			/**
			 * The subscription event gets only dispatched when all of the field names included in this list have been updated
			*/
			updatedFields_contains_every:scalar_String[];
			/**
			 * The subscription event gets only dispatched when some of the field names included in this list have been updated
			*/
			updatedFields_contains_some:scalar_String[];
			node?:StarshipSubscriptionFilterNode
		};
	export type StarshipSubscriptionFilterNode = {
			cargoCapacity?:scalar_Float;
			/**
			 * All values that are not equal to given value.
			*/
			cargoCapacity_not?:scalar_Float;
			/**
			 * All values that are contained in given list.
			*/
			cargoCapacity_in:scalar_Float[];
			/**
			 * All values that are not contained in given list.
			*/
			cargoCapacity_not_in:scalar_Float[];
			/**
			 * All values less than the given value.
			*/
			cargoCapacity_lt?:scalar_Float;
			/**
			 * All values less than or equal the given value.
			*/
			cargoCapacity_lte?:scalar_Float;
			/**
			 * All values greater than the given value.
			*/
			cargoCapacity_gt?:scalar_Float;
			/**
			 * All values greater than or equal the given value.
			*/
			cargoCapacity_gte?:scalar_Float;
			class?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			class_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			class_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			class_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			class_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			class_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			class_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			class_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			class_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			class_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			class_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			class_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			class_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			class_not_ends_with?:scalar_String;
			consumables?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			consumables_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			consumables_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			consumables_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			consumables_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			consumables_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			consumables_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			consumables_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			consumables_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			consumables_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			consumables_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			consumables_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			consumables_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			consumables_not_ends_with?:scalar_String;
			costInCredits?:scalar_Float;
			/**
			 * All values that are not equal to given value.
			*/
			costInCredits_not?:scalar_Float;
			/**
			 * All values that are contained in given list.
			*/
			costInCredits_in:scalar_Float[];
			/**
			 * All values that are not contained in given list.
			*/
			costInCredits_not_in:scalar_Float[];
			/**
			 * All values less than the given value.
			*/
			costInCredits_lt?:scalar_Float;
			/**
			 * All values less than or equal the given value.
			*/
			costInCredits_lte?:scalar_Float;
			/**
			 * All values greater than the given value.
			*/
			costInCredits_gt?:scalar_Float;
			/**
			 * All values greater than or equal the given value.
			*/
			costInCredits_gte?:scalar_Float;
			createdAt?:scalar_DateTime;
			/**
			 * All values that are not equal to given value.
			*/
			createdAt_not?:scalar_DateTime;
			/**
			 * All values that are contained in given list.
			*/
			createdAt_in:scalar_DateTime[];
			/**
			 * All values that are not contained in given list.
			*/
			createdAt_not_in:scalar_DateTime[];
			/**
			 * All values less than the given value.
			*/
			createdAt_lt?:scalar_DateTime;
			/**
			 * All values less than or equal the given value.
			*/
			createdAt_lte?:scalar_DateTime;
			/**
			 * All values greater than the given value.
			*/
			createdAt_gt?:scalar_DateTime;
			/**
			 * All values greater than or equal the given value.
			*/
			createdAt_gte?:scalar_DateTime;
			crew?:scalar_Int;
			/**
			 * All values that are not equal to given value.
			*/
			crew_not?:scalar_Int;
			/**
			 * All values that are contained in given list.
			*/
			crew_in:scalar_Int[];
			/**
			 * All values that are not contained in given list.
			*/
			crew_not_in:scalar_Int[];
			/**
			 * All values less than the given value.
			*/
			crew_lt?:scalar_Int;
			/**
			 * All values less than or equal the given value.
			*/
			crew_lte?:scalar_Int;
			/**
			 * All values greater than the given value.
			*/
			crew_gt?:scalar_Int;
			/**
			 * All values greater than or equal the given value.
			*/
			crew_gte?:scalar_Int;
			hyperdriveRating?:scalar_Float;
			/**
			 * All values that are not equal to given value.
			*/
			hyperdriveRating_not?:scalar_Float;
			/**
			 * All values that are contained in given list.
			*/
			hyperdriveRating_in:scalar_Float[];
			/**
			 * All values that are not contained in given list.
			*/
			hyperdriveRating_not_in:scalar_Float[];
			/**
			 * All values less than the given value.
			*/
			hyperdriveRating_lt?:scalar_Float;
			/**
			 * All values less than or equal the given value.
			*/
			hyperdriveRating_lte?:scalar_Float;
			/**
			 * All values greater than the given value.
			*/
			hyperdriveRating_gt?:scalar_Float;
			/**
			 * All values greater than or equal the given value.
			*/
			hyperdriveRating_gte?:scalar_Float;
			id?:scalar_ID;
			/**
			 * All values that are not equal to given value.
			*/
			id_not?:scalar_ID;
			/**
			 * All values that are contained in given list.
			*/
			id_in:scalar_ID[];
			/**
			 * All values that are not contained in given list.
			*/
			id_not_in:scalar_ID[];
			/**
			 * All values less than the given value.
			*/
			id_lt?:scalar_ID;
			/**
			 * All values less than or equal the given value.
			*/
			id_lte?:scalar_ID;
			/**
			 * All values greater than the given value.
			*/
			id_gt?:scalar_ID;
			/**
			 * All values greater than or equal the given value.
			*/
			id_gte?:scalar_ID;
			/**
			 * All values containing the given string.
			*/
			id_contains?:scalar_ID;
			/**
			 * All values not containing the given string.
			*/
			id_not_contains?:scalar_ID;
			/**
			 * All values starting with the given string.
			*/
			id_starts_with?:scalar_ID;
			/**
			 * All values not starting with the given string.
			*/
			id_not_starts_with?:scalar_ID;
			/**
			 * All values ending with the given string.
			*/
			id_ends_with?:scalar_ID;
			/**
			 * All values not ending with the given string.
			*/
			id_not_ends_with?:scalar_ID;
			isPublished?:scalar_Boolean;
			/**
			 * All values that are not equal to given value.
			*/
			isPublished_not?:scalar_Boolean;
			length?:scalar_Float;
			/**
			 * All values that are not equal to given value.
			*/
			length_not?:scalar_Float;
			/**
			 * All values that are contained in given list.
			*/
			length_in:scalar_Float[];
			/**
			 * All values that are not contained in given list.
			*/
			length_not_in:scalar_Float[];
			/**
			 * All values less than the given value.
			*/
			length_lt?:scalar_Float;
			/**
			 * All values less than or equal the given value.
			*/
			length_lte?:scalar_Float;
			/**
			 * All values greater than the given value.
			*/
			length_gt?:scalar_Float;
			/**
			 * All values greater than or equal the given value.
			*/
			length_gte?:scalar_Float;
			maxAtmospheringSpeed?:scalar_Int;
			/**
			 * All values that are not equal to given value.
			*/
			maxAtmospheringSpeed_not?:scalar_Int;
			/**
			 * All values that are contained in given list.
			*/
			maxAtmospheringSpeed_in:scalar_Int[];
			/**
			 * All values that are not contained in given list.
			*/
			maxAtmospheringSpeed_not_in:scalar_Int[];
			/**
			 * All values less than the given value.
			*/
			maxAtmospheringSpeed_lt?:scalar_Int;
			/**
			 * All values less than or equal the given value.
			*/
			maxAtmospheringSpeed_lte?:scalar_Int;
			/**
			 * All values greater than the given value.
			*/
			maxAtmospheringSpeed_gt?:scalar_Int;
			/**
			 * All values greater than or equal the given value.
			*/
			maxAtmospheringSpeed_gte?:scalar_Int;
			mglt?:scalar_Int;
			/**
			 * All values that are not equal to given value.
			*/
			mglt_not?:scalar_Int;
			/**
			 * All values that are contained in given list.
			*/
			mglt_in:scalar_Int[];
			/**
			 * All values that are not contained in given list.
			*/
			mglt_not_in:scalar_Int[];
			/**
			 * All values less than the given value.
			*/
			mglt_lt?:scalar_Int;
			/**
			 * All values less than or equal the given value.
			*/
			mglt_lte?:scalar_Int;
			/**
			 * All values greater than the given value.
			*/
			mglt_gt?:scalar_Int;
			/**
			 * All values greater than or equal the given value.
			*/
			mglt_gte?:scalar_Int;
			name?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			name_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			name_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			name_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			name_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			name_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			name_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			name_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			name_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			name_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			name_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			name_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			name_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			name_not_ends_with?:scalar_String;
			passengers?:scalar_Int;
			/**
			 * All values that are not equal to given value.
			*/
			passengers_not?:scalar_Int;
			/**
			 * All values that are contained in given list.
			*/
			passengers_in:scalar_Int[];
			/**
			 * All values that are not contained in given list.
			*/
			passengers_not_in:scalar_Int[];
			/**
			 * All values less than the given value.
			*/
			passengers_lt?:scalar_Int;
			/**
			 * All values less than or equal the given value.
			*/
			passengers_lte?:scalar_Int;
			/**
			 * All values greater than the given value.
			*/
			passengers_gt?:scalar_Int;
			/**
			 * All values greater than or equal the given value.
			*/
			passengers_gte?:scalar_Int;
			updatedAt?:scalar_DateTime;
			/**
			 * All values that are not equal to given value.
			*/
			updatedAt_not?:scalar_DateTime;
			/**
			 * All values that are contained in given list.
			*/
			updatedAt_in:scalar_DateTime[];
			/**
			 * All values that are not contained in given list.
			*/
			updatedAt_not_in:scalar_DateTime[];
			/**
			 * All values less than the given value.
			*/
			updatedAt_lt?:scalar_DateTime;
			/**
			 * All values less than or equal the given value.
			*/
			updatedAt_lte?:scalar_DateTime;
			/**
			 * All values greater than the given value.
			*/
			updatedAt_gt?:scalar_DateTime;
			/**
			 * All values greater than or equal the given value.
			*/
			updatedAt_gte?:scalar_DateTime;
			films_every?:FilmFilter;
			films_some?:FilmFilter;
			films_none?:FilmFilter;
			pilots_every?:PersonFilter;
			pilots_some?:PersonFilter;
			pilots_none?:PersonFilter
		};
	export type StarshipSubscriptionPayload = {
		payload:{
			mutation:_ModelMutationType;
			node?:query["Starship"];
			updatedFields:scalar_String[];
			previousValues?:StarshipPreviousValues
		};
	};
	export type StarshipfilmsFilm = {
			/**
			 * The name of the director of this film.
			*/
			director?:scalar_String;
			/**
			 * The episode number of this film.
			*/
			episodeId:scalar_Int;
			/**
			 * indicates if the record is published
			*/
			isPublished?:scalar_Boolean;
			/**
			 * The opening paragraphs at the beginning of this film.
			*/
			openingCrawl?:scalar_String;
			/**
			 * The names of the producers of this film.
			*/
			producers:scalar_String[];
			/**
			 *  The ISO 8601 date format of film release at original creator country.
			*/
			releaseDate?:scalar_DateTime;
			/**
			 * The title of this film
			*/
			title:scalar_String;
			charactersIds:scalar_ID[];
			characters:FilmcharactersPerson[];
			planetsIds:scalar_ID[];
			planets:FilmplanetsPlanet[];
			speciesIds:scalar_ID[];
			species:FilmspeciesSpecies[];
			starshipsIds:scalar_ID[];
			starships:FilmstarshipsStarship[];
			vehiclesIds:scalar_ID[];
			vehicles:FilmvehiclesVehicle[]
		};
	export type StarshippilotsPerson = {
			/**
			 * The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.
			*/
			birthYear?:scalar_String;
			/**
			 * The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye.
			*/
			eyeColor:PERSON_EYE_COLOR[];
			/**
			 *  The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender.
			*/
			gender?:PERSON_GENDER;
			/**
			 * The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair.
			*/
			hairColor:PERSON_HAIR_COLOR[];
			/**
			 * The height of the person in centimeters.
			*/
			height?:scalar_Int;
			/**
			 * indicates if the record is published
			*/
			isPublished?:scalar_Boolean;
			/**
			 * The mass of the person in kilograms.
			*/
			mass?:scalar_Float;
			/**
			 * The name of this person.
			*/
			name:scalar_String;
			/**
			 * The skin color of this person.
			*/
			skinColor:PERSON_SKIN_COLOR[];
			homeworldId?:scalar_ID;
			homeworld?:PersonhomeworldPlanet;
			filmsIds:scalar_ID[];
			films:PersonfilmsFilm[];
			speciesIds:scalar_ID[];
			species:PersonspeciesSpecies[];
			starshipsIds:scalar_ID[];
			starships:PersonstarshipsStarship[];
			vehiclesIds:scalar_ID[];
			vehicles:PersonvehiclesVehicle[]
		};
	export type UpdateAsset = {
			/**
			 * Original File Name
			*/
			fileName?:scalar_String;
			/**
			 * The File Handle
			*/
			handle?:scalar_String;
			/**
			 * The height of the file in case it is an image
			*/
			height?:scalar_Float;
			id:scalar_ID;
			/**
			 * The Mime Type
			*/
			mimeType?:scalar_String;
			/**
			 * The Size Of The File
			*/
			size?:scalar_Float;
			/**
			 * The Url Of The Asset
			*/
			url?:scalar_String;
			/**
			 * The width of the file in case it is an image
			*/
			width?:scalar_Float
		};
	export type UpdateFilm = {
			/**
			 * The name of the director of this film.
			*/
			director?:scalar_String;
			/**
			 * The episode number of this film.
			*/
			episodeId?:scalar_Int;
			id:scalar_ID;
			/**
			 * indicates if the record is published
			*/
			isPublished?:scalar_Boolean;
			/**
			 * The opening paragraphs at the beginning of this film.
			*/
			openingCrawl?:scalar_String;
			/**
			 * The names of the producers of this film.
			*/
			producers:scalar_String[];
			/**
			 *  The ISO 8601 date format of film release at original creator country.
			*/
			releaseDate?:scalar_DateTime;
			/**
			 * The title of this film
			*/
			title?:scalar_String;
			charactersIds:scalar_ID[];
			characters:FilmcharactersPerson[];
			planetsIds:scalar_ID[];
			planets:FilmplanetsPlanet[];
			speciesIds:scalar_ID[];
			species:FilmspeciesSpecies[];
			starshipsIds:scalar_ID[];
			starships:FilmstarshipsStarship[];
			vehiclesIds:scalar_ID[];
			vehicles:FilmvehiclesVehicle[]
		};
	export type UpdatePerson = {
			/**
			 * The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.
			*/
			birthYear?:scalar_String;
			/**
			 * The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye.
			*/
			eyeColor:PERSON_EYE_COLOR[];
			/**
			 *  The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender.
			*/
			gender?:PERSON_GENDER;
			/**
			 * The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair.
			*/
			hairColor:PERSON_HAIR_COLOR[];
			/**
			 * The height of the person in centimeters.
			*/
			height?:scalar_Int;
			id:scalar_ID;
			/**
			 * indicates if the record is published
			*/
			isPublished?:scalar_Boolean;
			/**
			 * The mass of the person in kilograms.
			*/
			mass?:scalar_Float;
			/**
			 * The name of this person.
			*/
			name?:scalar_String;
			/**
			 * The skin color of this person.
			*/
			skinColor:PERSON_SKIN_COLOR[];
			homeworldId?:scalar_ID;
			homeworld?:PersonhomeworldPlanet;
			filmsIds:scalar_ID[];
			films:PersonfilmsFilm[];
			speciesIds:scalar_ID[];
			species:PersonspeciesSpecies[];
			starshipsIds:scalar_ID[];
			starships:PersonstarshipsStarship[];
			vehiclesIds:scalar_ID[];
			vehicles:PersonvehiclesVehicle[]
		};
	export type UpdatePlanet = {
			/**
			 * The climate of this planet.
			*/
			climate:scalar_String[];
			/**
			 * The diameter of this planet in kilometers.
			*/
			diameter?:scalar_Int;
			/**
			 * A number denoting the gravity of this planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
			*/
			gravity?:scalar_String;
			id:scalar_ID;
			/**
			 * indicates if the record is published
			*/
			isPublished?:scalar_Boolean;
			/**
			 * The name of the planet
			*/
			name?:scalar_String;
			/**
			 * The number of standard days it takes for this planet to complete a single orbit of its local star.
			*/
			orbitalPeriod?:scalar_Int;
			/**
			 * The average population of sentient beings inhabiting this planet.
			*/
			population?:scalar_Float;
			/**
			 * The number of standard hours it takes for this planet to complete a single rotation on its axis.
			*/
			rotationPeriod?:scalar_Int;
			/**
			 * The percentage of the planet surface that is naturally occurring water or bodies of water.
			*/
			surfaceWater?:scalar_Float;
			/**
			 * The terrain of this planet.
			*/
			terrain:scalar_String[];
			filmsIds:scalar_ID[];
			films:PlanetfilmsFilm[];
			residentsIds:scalar_ID[];
			residents:PlanetresidentsPerson[]
		};
	export type UpdateSpecies = {
			/**
			 * The average height of this species in centimeters.
			*/
			averageHeight?:scalar_Int;
			/**
			 * The average lifespan of this species in years.
			*/
			averageLifespan?:scalar_Int;
			/**
			 * The classification of this species, such as "mammal" or "reptile".
			*/
			classification?:scalar_String;
			/**
			 * The designation of this species, such as "sentient".
			*/
			designation?:scalar_String;
			/**
			 * The eye colors for this species, "UNKNOWN" if not known, null if this species does not typically have eyes.
			*/
			eyeColor:SPECIES_EYE_COLOR[];
			/**
			 * The hair colors for this species, "UNKNOWN" if not known, null if this species does not typically have hairs.
			*/
			hairColor:SPECIES_HAIR_COLOR[];
			id:scalar_ID;
			/**
			 * indicates if the record is published
			*/
			isPublished?:scalar_Boolean;
			/**
			 * The language commonly spoken by this species.
			*/
			language?:scalar_String;
			/**
			 * The name of this species.
			*/
			name?:scalar_String;
			/**
			 * The skin colors for this species, "UNKNOWN" if not known, null if this species does not typically have a skin.
			*/
			skinColor:SPECIES_SKIN_COLOR[];
			filmsIds:scalar_ID[];
			films:SpeciesfilmsFilm[];
			peopleIds:scalar_ID[];
			people:SpeciespeoplePerson[]
		};
	export type UpdateStarship = {
			/**
			 * The maximum number of kilograms that this starship can transport.
			*/
			cargoCapacity?:scalar_Float;
			/**
			 * The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation"
			*/
			class?:scalar_String;
			/**
			 * The maximum length of time that this starship can provide consumables for its entire crew without having to resupply.
			*/
			consumables?:scalar_String;
			/**
			 *  The cost of this starship new, in galactic credits.
			*/
			costInCredits?:scalar_Float;
			/**
			 * The number of personnel needed to run or pilot this starship.
			*/
			crew?:scalar_Int;
			/**
			 * The class of this starships hyperdrive.
			*/
			hyperdriveRating?:scalar_Float;
			id:scalar_ID;
			/**
			 * indicates if the record is published
			*/
			isPublished?:scalar_Boolean;
			/**
			 * The length of this starship in meters.
			*/
			length?:scalar_Float;
			/**
			 * The manufacturer of this starship.
			*/
			manufacturer:scalar_String[];
			/**
			 *  The maximum speed of this starship in the atmosphere. null if this starship is incapable of atmospheric flight.
			*/
			maxAtmospheringSpeed?:scalar_Int;
			/**
			 * The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe.
			*/
			mglt?:scalar_Int;
			/**
			 * The name of this starship. The common name, such as "Death Star".
			*/
			name?:scalar_String;
			/**
			 *  The number of non-essential people this starship can transport.
			*/
			passengers?:scalar_Int;
			filmsIds:scalar_ID[];
			films:StarshipfilmsFilm[];
			pilotsIds:scalar_ID[];
			pilots:StarshippilotsPerson[]
		};
	export type UpdateVehicle = {
			/**
			 * The maximum number of kilograms that this vehicle can transport.
			*/
			cargoCapacity?:scalar_Int;
			/**
			 *  The class of this vehicle, such as "Wheeled" or "Repulsorcraft".
			*/
			class?:scalar_String;
			/**
			 * The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply.
			*/
			consumables?:scalar_String;
			/**
			 * The cost of this vehicle new, in Galactic Credits.
			*/
			costInCredits?:scalar_Int;
			/**
			 * The number of personnel needed to run or pilot this vehicle.
			*/
			crew?:scalar_Int;
			id:scalar_ID;
			/**
			 * indicates if the record is published
			*/
			isPublished?:scalar_Boolean;
			/**
			 *  The length of this vehicle in meters.
			*/
			length?:scalar_Float;
			/**
			 * The manufacturer of this vehicle.
			*/
			manufacturer:scalar_String[];
			/**
			 * The maximum speed of this vehicle in the atmosphere.
			*/
			maxAtmospheringSpeed?:scalar_Int;
			/**
			 * The model or official name of this vehicle. Such as "All-Terrain Attack Transport".
			*/
			model?:scalar_String;
			/**
			 * The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike".
			*/
			name?:scalar_String;
			/**
			 * The number of non-essential people this vehicle can transport.
			*/
			passengers?:scalar_Int;
			filmsIds:scalar_ID[];
			films:VehiclefilmsFilm[];
			pilotsIds:scalar_ID[];
			pilots:VehiclepilotsPerson[]
		};
	export type VehiclePreviousValues = {
		payload:{
			/**
			 * The maximum number of kilograms that this vehicle can transport.
			*/
			cargoCapacity?:scalar_Int;
			/**
			 *  The class of this vehicle, such as "Wheeled" or "Repulsorcraft".
			*/
			class?:scalar_String;
			/**
			 * The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply.
			*/
			consumables?:scalar_String;
			/**
			 * The cost of this vehicle new, in Galactic Credits.
			*/
			costInCredits?:scalar_Int;
			createdAt:scalar_DateTime;
			/**
			 * The number of personnel needed to run or pilot this vehicle.
			*/
			crew?:scalar_Int;
			id:scalar_ID;
			/**
			 * indicates if the record is published
			*/
			isPublished:scalar_Boolean;
			/**
			 *  The length of this vehicle in meters.
			*/
			length?:scalar_Float;
			/**
			 * The manufacturer of this vehicle.
			*/
			manufacturer:scalar_String[];
			/**
			 * The maximum speed of this vehicle in the atmosphere.
			*/
			maxAtmospheringSpeed?:scalar_Int;
			/**
			 * The model or official name of this vehicle. Such as "All-Terrain Attack Transport".
			*/
			model?:scalar_String;
			/**
			 * The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike".
			*/
			name:scalar_String;
			/**
			 * The number of non-essential people this vehicle can transport.
			*/
			passengers?:scalar_Int;
			updatedAt:scalar_DateTime
		};
	};
	export type VehicleSubscriptionFilter = {
			/**
			 * Logical AND on all given filters.
			*/
			AND:VehicleSubscriptionFilter[];
			/**
			 * Logical OR on all given filters.
			*/
			OR:VehicleSubscriptionFilter[];
			/**
			 * The subscription event gets dispatched when it's listed in mutation_in
			*/
			mutation_in:_ModelMutationType[];
			/**
			 * The subscription event gets only dispatched when one of the updated fields names is included in this list
			*/
			updatedFields_contains?:scalar_String;
			/**
			 * The subscription event gets only dispatched when all of the field names included in this list have been updated
			*/
			updatedFields_contains_every:scalar_String[];
			/**
			 * The subscription event gets only dispatched when some of the field names included in this list have been updated
			*/
			updatedFields_contains_some:scalar_String[];
			node?:VehicleSubscriptionFilterNode
		};
	export type VehicleSubscriptionFilterNode = {
			cargoCapacity?:scalar_Int;
			/**
			 * All values that are not equal to given value.
			*/
			cargoCapacity_not?:scalar_Int;
			/**
			 * All values that are contained in given list.
			*/
			cargoCapacity_in:scalar_Int[];
			/**
			 * All values that are not contained in given list.
			*/
			cargoCapacity_not_in:scalar_Int[];
			/**
			 * All values less than the given value.
			*/
			cargoCapacity_lt?:scalar_Int;
			/**
			 * All values less than or equal the given value.
			*/
			cargoCapacity_lte?:scalar_Int;
			/**
			 * All values greater than the given value.
			*/
			cargoCapacity_gt?:scalar_Int;
			/**
			 * All values greater than or equal the given value.
			*/
			cargoCapacity_gte?:scalar_Int;
			class?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			class_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			class_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			class_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			class_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			class_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			class_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			class_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			class_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			class_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			class_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			class_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			class_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			class_not_ends_with?:scalar_String;
			consumables?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			consumables_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			consumables_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			consumables_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			consumables_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			consumables_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			consumables_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			consumables_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			consumables_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			consumables_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			consumables_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			consumables_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			consumables_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			consumables_not_ends_with?:scalar_String;
			costInCredits?:scalar_Int;
			/**
			 * All values that are not equal to given value.
			*/
			costInCredits_not?:scalar_Int;
			/**
			 * All values that are contained in given list.
			*/
			costInCredits_in:scalar_Int[];
			/**
			 * All values that are not contained in given list.
			*/
			costInCredits_not_in:scalar_Int[];
			/**
			 * All values less than the given value.
			*/
			costInCredits_lt?:scalar_Int;
			/**
			 * All values less than or equal the given value.
			*/
			costInCredits_lte?:scalar_Int;
			/**
			 * All values greater than the given value.
			*/
			costInCredits_gt?:scalar_Int;
			/**
			 * All values greater than or equal the given value.
			*/
			costInCredits_gte?:scalar_Int;
			createdAt?:scalar_DateTime;
			/**
			 * All values that are not equal to given value.
			*/
			createdAt_not?:scalar_DateTime;
			/**
			 * All values that are contained in given list.
			*/
			createdAt_in:scalar_DateTime[];
			/**
			 * All values that are not contained in given list.
			*/
			createdAt_not_in:scalar_DateTime[];
			/**
			 * All values less than the given value.
			*/
			createdAt_lt?:scalar_DateTime;
			/**
			 * All values less than or equal the given value.
			*/
			createdAt_lte?:scalar_DateTime;
			/**
			 * All values greater than the given value.
			*/
			createdAt_gt?:scalar_DateTime;
			/**
			 * All values greater than or equal the given value.
			*/
			createdAt_gte?:scalar_DateTime;
			crew?:scalar_Int;
			/**
			 * All values that are not equal to given value.
			*/
			crew_not?:scalar_Int;
			/**
			 * All values that are contained in given list.
			*/
			crew_in:scalar_Int[];
			/**
			 * All values that are not contained in given list.
			*/
			crew_not_in:scalar_Int[];
			/**
			 * All values less than the given value.
			*/
			crew_lt?:scalar_Int;
			/**
			 * All values less than or equal the given value.
			*/
			crew_lte?:scalar_Int;
			/**
			 * All values greater than the given value.
			*/
			crew_gt?:scalar_Int;
			/**
			 * All values greater than or equal the given value.
			*/
			crew_gte?:scalar_Int;
			id?:scalar_ID;
			/**
			 * All values that are not equal to given value.
			*/
			id_not?:scalar_ID;
			/**
			 * All values that are contained in given list.
			*/
			id_in:scalar_ID[];
			/**
			 * All values that are not contained in given list.
			*/
			id_not_in:scalar_ID[];
			/**
			 * All values less than the given value.
			*/
			id_lt?:scalar_ID;
			/**
			 * All values less than or equal the given value.
			*/
			id_lte?:scalar_ID;
			/**
			 * All values greater than the given value.
			*/
			id_gt?:scalar_ID;
			/**
			 * All values greater than or equal the given value.
			*/
			id_gte?:scalar_ID;
			/**
			 * All values containing the given string.
			*/
			id_contains?:scalar_ID;
			/**
			 * All values not containing the given string.
			*/
			id_not_contains?:scalar_ID;
			/**
			 * All values starting with the given string.
			*/
			id_starts_with?:scalar_ID;
			/**
			 * All values not starting with the given string.
			*/
			id_not_starts_with?:scalar_ID;
			/**
			 * All values ending with the given string.
			*/
			id_ends_with?:scalar_ID;
			/**
			 * All values not ending with the given string.
			*/
			id_not_ends_with?:scalar_ID;
			isPublished?:scalar_Boolean;
			/**
			 * All values that are not equal to given value.
			*/
			isPublished_not?:scalar_Boolean;
			length?:scalar_Float;
			/**
			 * All values that are not equal to given value.
			*/
			length_not?:scalar_Float;
			/**
			 * All values that are contained in given list.
			*/
			length_in:scalar_Float[];
			/**
			 * All values that are not contained in given list.
			*/
			length_not_in:scalar_Float[];
			/**
			 * All values less than the given value.
			*/
			length_lt?:scalar_Float;
			/**
			 * All values less than or equal the given value.
			*/
			length_lte?:scalar_Float;
			/**
			 * All values greater than the given value.
			*/
			length_gt?:scalar_Float;
			/**
			 * All values greater than or equal the given value.
			*/
			length_gte?:scalar_Float;
			maxAtmospheringSpeed?:scalar_Int;
			/**
			 * All values that are not equal to given value.
			*/
			maxAtmospheringSpeed_not?:scalar_Int;
			/**
			 * All values that are contained in given list.
			*/
			maxAtmospheringSpeed_in:scalar_Int[];
			/**
			 * All values that are not contained in given list.
			*/
			maxAtmospheringSpeed_not_in:scalar_Int[];
			/**
			 * All values less than the given value.
			*/
			maxAtmospheringSpeed_lt?:scalar_Int;
			/**
			 * All values less than or equal the given value.
			*/
			maxAtmospheringSpeed_lte?:scalar_Int;
			/**
			 * All values greater than the given value.
			*/
			maxAtmospheringSpeed_gt?:scalar_Int;
			/**
			 * All values greater than or equal the given value.
			*/
			maxAtmospheringSpeed_gte?:scalar_Int;
			model?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			model_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			model_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			model_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			model_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			model_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			model_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			model_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			model_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			model_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			model_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			model_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			model_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			model_not_ends_with?:scalar_String;
			name?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			name_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			name_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			name_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			name_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			name_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			name_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			name_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			name_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			name_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			name_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			name_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			name_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			name_not_ends_with?:scalar_String;
			passengers?:scalar_Int;
			/**
			 * All values that are not equal to given value.
			*/
			passengers_not?:scalar_Int;
			/**
			 * All values that are contained in given list.
			*/
			passengers_in:scalar_Int[];
			/**
			 * All values that are not contained in given list.
			*/
			passengers_not_in:scalar_Int[];
			/**
			 * All values less than the given value.
			*/
			passengers_lt?:scalar_Int;
			/**
			 * All values less than or equal the given value.
			*/
			passengers_lte?:scalar_Int;
			/**
			 * All values greater than the given value.
			*/
			passengers_gt?:scalar_Int;
			/**
			 * All values greater than or equal the given value.
			*/
			passengers_gte?:scalar_Int;
			updatedAt?:scalar_DateTime;
			/**
			 * All values that are not equal to given value.
			*/
			updatedAt_not?:scalar_DateTime;
			/**
			 * All values that are contained in given list.
			*/
			updatedAt_in:scalar_DateTime[];
			/**
			 * All values that are not contained in given list.
			*/
			updatedAt_not_in:scalar_DateTime[];
			/**
			 * All values less than the given value.
			*/
			updatedAt_lt?:scalar_DateTime;
			/**
			 * All values less than or equal the given value.
			*/
			updatedAt_lte?:scalar_DateTime;
			/**
			 * All values greater than the given value.
			*/
			updatedAt_gt?:scalar_DateTime;
			/**
			 * All values greater than or equal the given value.
			*/
			updatedAt_gte?:scalar_DateTime;
			films_every?:FilmFilter;
			films_some?:FilmFilter;
			films_none?:FilmFilter;
			pilots_every?:PersonFilter;
			pilots_some?:PersonFilter;
			pilots_none?:PersonFilter
		};
	export type VehicleSubscriptionPayload = {
		payload:{
			mutation:_ModelMutationType;
			node?:query["Vehicle"];
			updatedFields:scalar_String[];
			previousValues?:VehiclePreviousValues
		};
	};
	export type VehiclefilmsFilm = {
			/**
			 * The name of the director of this film.
			*/
			director?:scalar_String;
			/**
			 * The episode number of this film.
			*/
			episodeId:scalar_Int;
			/**
			 * indicates if the record is published
			*/
			isPublished?:scalar_Boolean;
			/**
			 * The opening paragraphs at the beginning of this film.
			*/
			openingCrawl?:scalar_String;
			/**
			 * The names of the producers of this film.
			*/
			producers:scalar_String[];
			/**
			 *  The ISO 8601 date format of film release at original creator country.
			*/
			releaseDate?:scalar_DateTime;
			/**
			 * The title of this film
			*/
			title:scalar_String;
			charactersIds:scalar_ID[];
			characters:FilmcharactersPerson[];
			planetsIds:scalar_ID[];
			planets:FilmplanetsPlanet[];
			speciesIds:scalar_ID[];
			species:FilmspeciesSpecies[];
			starshipsIds:scalar_ID[];
			starships:FilmstarshipsStarship[];
			vehiclesIds:scalar_ID[];
			vehicles:FilmvehiclesVehicle[]
		};
	export type VehiclepilotsPerson = {
			/**
			 * The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.
			*/
			birthYear?:scalar_String;
			/**
			 * The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye.
			*/
			eyeColor:PERSON_EYE_COLOR[];
			/**
			 *  The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender.
			*/
			gender?:PERSON_GENDER;
			/**
			 * The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair.
			*/
			hairColor:PERSON_HAIR_COLOR[];
			/**
			 * The height of the person in centimeters.
			*/
			height?:scalar_Int;
			/**
			 * indicates if the record is published
			*/
			isPublished?:scalar_Boolean;
			/**
			 * The mass of the person in kilograms.
			*/
			mass?:scalar_Float;
			/**
			 * The name of this person.
			*/
			name:scalar_String;
			/**
			 * The skin color of this person.
			*/
			skinColor:PERSON_SKIN_COLOR[];
			homeworldId?:scalar_ID;
			homeworld?:PersonhomeworldPlanet;
			filmsIds:scalar_ID[];
			films:PersonfilmsFilm[];
			speciesIds:scalar_ID[];
			species:PersonspeciesSpecies[];
			starshipsIds:scalar_ID[];
			starships:PersonstarshipsStarship[];
			vehiclesIds:scalar_ID[];
			vehicles:PersonvehiclesVehicle[]
		};
	export type _ModelMutationType  = 'CREATED' | 'UPDATED' | 'DELETED';
	/**
	 * System model for Assets
	*/
	export type Asset = {
		payload:{
			createdAt:scalar_DateTime;
			/**
			 * Original File Name
			*/
			fileName:scalar_String;
			/**
			 * The File Handle
			*/
			handle:scalar_String;
			/**
			 * The height of the file in case it is an image
			*/
			height?:scalar_Float;
			id:scalar_ID;
			/**
			 * The Mime Type
			*/
			mimeType?:scalar_String;
			/**
			 * The Size Of The File
			*/
			size:scalar_Float;
			updatedAt:scalar_DateTime;
			/**
			 * The Url Of The Asset
			*/
			url:scalar_String;
			/**
			 * The width of the file in case it is an image
			*/
			width?:scalar_Float
		};
	};
	export type AssetFilter = {
			/**
			 * Logical AND on all given filters.
			*/
			AND:AssetFilter[];
			/**
			 * Logical OR on all given filters.
			*/
			OR:AssetFilter[];
			createdAt?:scalar_DateTime;
			/**
			 * All values that are not equal to given value.
			*/
			createdAt_not?:scalar_DateTime;
			/**
			 * All values that are contained in given list.
			*/
			createdAt_in:scalar_DateTime[];
			/**
			 * All values that are not contained in given list.
			*/
			createdAt_not_in:scalar_DateTime[];
			/**
			 * All values less than the given value.
			*/
			createdAt_lt?:scalar_DateTime;
			/**
			 * All values less than or equal the given value.
			*/
			createdAt_lte?:scalar_DateTime;
			/**
			 * All values greater than the given value.
			*/
			createdAt_gt?:scalar_DateTime;
			/**
			 * All values greater than or equal the given value.
			*/
			createdAt_gte?:scalar_DateTime;
			fileName?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			fileName_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			fileName_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			fileName_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			fileName_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			fileName_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			fileName_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			fileName_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			fileName_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			fileName_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			fileName_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			fileName_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			fileName_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			fileName_not_ends_with?:scalar_String;
			handle?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			handle_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			handle_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			handle_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			handle_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			handle_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			handle_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			handle_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			handle_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			handle_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			handle_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			handle_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			handle_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			handle_not_ends_with?:scalar_String;
			height?:scalar_Float;
			/**
			 * All values that are not equal to given value.
			*/
			height_not?:scalar_Float;
			/**
			 * All values that are contained in given list.
			*/
			height_in:scalar_Float[];
			/**
			 * All values that are not contained in given list.
			*/
			height_not_in:scalar_Float[];
			/**
			 * All values less than the given value.
			*/
			height_lt?:scalar_Float;
			/**
			 * All values less than or equal the given value.
			*/
			height_lte?:scalar_Float;
			/**
			 * All values greater than the given value.
			*/
			height_gt?:scalar_Float;
			/**
			 * All values greater than or equal the given value.
			*/
			height_gte?:scalar_Float;
			id?:scalar_ID;
			/**
			 * All values that are not equal to given value.
			*/
			id_not?:scalar_ID;
			/**
			 * All values that are contained in given list.
			*/
			id_in:scalar_ID[];
			/**
			 * All values that are not contained in given list.
			*/
			id_not_in:scalar_ID[];
			/**
			 * All values less than the given value.
			*/
			id_lt?:scalar_ID;
			/**
			 * All values less than or equal the given value.
			*/
			id_lte?:scalar_ID;
			/**
			 * All values greater than the given value.
			*/
			id_gt?:scalar_ID;
			/**
			 * All values greater than or equal the given value.
			*/
			id_gte?:scalar_ID;
			/**
			 * All values containing the given string.
			*/
			id_contains?:scalar_ID;
			/**
			 * All values not containing the given string.
			*/
			id_not_contains?:scalar_ID;
			/**
			 * All values starting with the given string.
			*/
			id_starts_with?:scalar_ID;
			/**
			 * All values not starting with the given string.
			*/
			id_not_starts_with?:scalar_ID;
			/**
			 * All values ending with the given string.
			*/
			id_ends_with?:scalar_ID;
			/**
			 * All values not ending with the given string.
			*/
			id_not_ends_with?:scalar_ID;
			mimeType?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			mimeType_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			mimeType_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			mimeType_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			mimeType_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			mimeType_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			mimeType_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			mimeType_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			mimeType_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			mimeType_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			mimeType_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			mimeType_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			mimeType_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			mimeType_not_ends_with?:scalar_String;
			size?:scalar_Float;
			/**
			 * All values that are not equal to given value.
			*/
			size_not?:scalar_Float;
			/**
			 * All values that are contained in given list.
			*/
			size_in:scalar_Float[];
			/**
			 * All values that are not contained in given list.
			*/
			size_not_in:scalar_Float[];
			/**
			 * All values less than the given value.
			*/
			size_lt?:scalar_Float;
			/**
			 * All values less than or equal the given value.
			*/
			size_lte?:scalar_Float;
			/**
			 * All values greater than the given value.
			*/
			size_gt?:scalar_Float;
			/**
			 * All values greater than or equal the given value.
			*/
			size_gte?:scalar_Float;
			updatedAt?:scalar_DateTime;
			/**
			 * All values that are not equal to given value.
			*/
			updatedAt_not?:scalar_DateTime;
			/**
			 * All values that are contained in given list.
			*/
			updatedAt_in:scalar_DateTime[];
			/**
			 * All values that are not contained in given list.
			*/
			updatedAt_not_in:scalar_DateTime[];
			/**
			 * All values less than the given value.
			*/
			updatedAt_lt?:scalar_DateTime;
			/**
			 * All values less than or equal the given value.
			*/
			updatedAt_lte?:scalar_DateTime;
			/**
			 * All values greater than the given value.
			*/
			updatedAt_gt?:scalar_DateTime;
			/**
			 * All values greater than or equal the given value.
			*/
			updatedAt_gte?:scalar_DateTime;
			url?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			url_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			url_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			url_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			url_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			url_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			url_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			url_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			url_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			url_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			url_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			url_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			url_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			url_not_ends_with?:scalar_String;
			width?:scalar_Float;
			/**
			 * All values that are not equal to given value.
			*/
			width_not?:scalar_Float;
			/**
			 * All values that are contained in given list.
			*/
			width_in:scalar_Float[];
			/**
			 * All values that are not contained in given list.
			*/
			width_not_in:scalar_Float[];
			/**
			 * All values less than the given value.
			*/
			width_lt?:scalar_Float;
			/**
			 * All values less than or equal the given value.
			*/
			width_lte?:scalar_Float;
			/**
			 * All values greater than the given value.
			*/
			width_gt?:scalar_Float;
			/**
			 * All values greater than or equal the given value.
			*/
			width_gte?:scalar_Float
		};
	export type AssetOrderBy  = 'createdAt_ASC' | 'createdAt_DESC' | 'fileName_ASC' | 'fileName_DESC' | 'handle_ASC' | 'handle_DESC' | 'height_ASC' | 'height_DESC' | 'id_ASC' | 'id_DESC' | 'mimeType_ASC' | 'mimeType_DESC' | 'size_ASC' | 'size_DESC' | 'updatedAt_ASC' | 'updatedAt_DESC' | 'url_ASC' | 'url_DESC' | 'width_ASC' | 'width_DESC';
	export type scalar_DateTime = any;
	/**
	 * A Film is a single film.
	*/
	export type Film = {
		payload:{
			characters:{
				payload:Arrayed<query["Person"]>['payload'];
				args?:{
					filter?:PersonFilter;
					orderBy?:PersonOrderBy;
					skip?:scalar_Int;
					after?:scalar_String;
					before?:scalar_String;
					first?:scalar_Int;
					last?:scalar_Int
				};
			};
			createdAt:scalar_DateTime;
			/**
			 * The name of the director of this film.
			*/
			director?:scalar_String;
			/**
			 * The episode number of this film.
			*/
			episodeId:scalar_Int;
			id:scalar_ID;
			/**
			 * indicates if the record is published
			*/
			isPublished:scalar_Boolean;
			/**
			 * The opening paragraphs at the beginning of this film.
			*/
			openingCrawl?:scalar_String;
			planets:{
				payload:Arrayed<query["Planet"]>['payload'];
				args?:{
					filter?:PlanetFilter;
					orderBy?:PlanetOrderBy;
					skip?:scalar_Int;
					after?:scalar_String;
					before?:scalar_String;
					first?:scalar_Int;
					last?:scalar_Int
				};
			};
			/**
			 * The names of the producers of this film.
			*/
			producers:scalar_String[];
			/**
			 *  The ISO 8601 date format of film release at original creator country.
			*/
			releaseDate?:scalar_DateTime;
			species:{
				payload:Arrayed<query["Species"]>['payload'];
				args?:{
					filter?:SpeciesFilter;
					orderBy?:SpeciesOrderBy;
					skip?:scalar_Int;
					after?:scalar_String;
					before?:scalar_String;
					first?:scalar_Int;
					last?:scalar_Int
				};
			};
			starships:{
				payload:Arrayed<query["Starship"]>['payload'];
				args?:{
					filter?:StarshipFilter;
					orderBy?:StarshipOrderBy;
					skip?:scalar_Int;
					after?:scalar_String;
					before?:scalar_String;
					first?:scalar_Int;
					last?:scalar_Int
				};
			};
			/**
			 * The title of this film
			*/
			title:scalar_String;
			updatedAt:scalar_DateTime;
			vehicles:{
				payload:Arrayed<query["Vehicle"]>['payload'];
				args?:{
					filter?:VehicleFilter;
					orderBy?:VehicleOrderBy;
					skip?:scalar_Int;
					after?:scalar_String;
					before?:scalar_String;
					first?:scalar_Int;
					last?:scalar_Int
				};
			};
			/**
			 * Meta information about the query.
			*/
			_charactersMeta:{
				payload:_QueryMeta['payload'];
				args?:{
					filter?:PersonFilter;
					orderBy?:PersonOrderBy;
					skip?:scalar_Int;
					after?:scalar_String;
					before?:scalar_String;
					first?:scalar_Int;
					last?:scalar_Int
				};
			};
			/**
			 * Meta information about the query.
			*/
			_planetsMeta:{
				payload:_QueryMeta['payload'];
				args?:{
					filter?:PlanetFilter;
					orderBy?:PlanetOrderBy;
					skip?:scalar_Int;
					after?:scalar_String;
					before?:scalar_String;
					first?:scalar_Int;
					last?:scalar_Int
				};
			};
			/**
			 * Meta information about the query.
			*/
			_speciesMeta:{
				payload:_QueryMeta['payload'];
				args?:{
					filter?:SpeciesFilter;
					orderBy?:SpeciesOrderBy;
					skip?:scalar_Int;
					after?:scalar_String;
					before?:scalar_String;
					first?:scalar_Int;
					last?:scalar_Int
				};
			};
			/**
			 * Meta information about the query.
			*/
			_starshipsMeta:{
				payload:_QueryMeta['payload'];
				args?:{
					filter?:StarshipFilter;
					orderBy?:StarshipOrderBy;
					skip?:scalar_Int;
					after?:scalar_String;
					before?:scalar_String;
					first?:scalar_Int;
					last?:scalar_Int
				};
			};
			/**
			 * Meta information about the query.
			*/
			_vehiclesMeta:{
				payload:_QueryMeta['payload'];
				args?:{
					filter?:VehicleFilter;
					orderBy?:VehicleOrderBy;
					skip?:scalar_Int;
					after?:scalar_String;
					before?:scalar_String;
					first?:scalar_Int;
					last?:scalar_Int
				};
			}
		};
	};
	export type FilmFilter = {
			/**
			 * Logical AND on all given filters.
			*/
			AND:FilmFilter[];
			/**
			 * Logical OR on all given filters.
			*/
			OR:FilmFilter[];
			createdAt?:scalar_DateTime;
			/**
			 * All values that are not equal to given value.
			*/
			createdAt_not?:scalar_DateTime;
			/**
			 * All values that are contained in given list.
			*/
			createdAt_in:scalar_DateTime[];
			/**
			 * All values that are not contained in given list.
			*/
			createdAt_not_in:scalar_DateTime[];
			/**
			 * All values less than the given value.
			*/
			createdAt_lt?:scalar_DateTime;
			/**
			 * All values less than or equal the given value.
			*/
			createdAt_lte?:scalar_DateTime;
			/**
			 * All values greater than the given value.
			*/
			createdAt_gt?:scalar_DateTime;
			/**
			 * All values greater than or equal the given value.
			*/
			createdAt_gte?:scalar_DateTime;
			director?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			director_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			director_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			director_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			director_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			director_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			director_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			director_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			director_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			director_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			director_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			director_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			director_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			director_not_ends_with?:scalar_String;
			episodeId?:scalar_Int;
			/**
			 * All values that are not equal to given value.
			*/
			episodeId_not?:scalar_Int;
			/**
			 * All values that are contained in given list.
			*/
			episodeId_in:scalar_Int[];
			/**
			 * All values that are not contained in given list.
			*/
			episodeId_not_in:scalar_Int[];
			/**
			 * All values less than the given value.
			*/
			episodeId_lt?:scalar_Int;
			/**
			 * All values less than or equal the given value.
			*/
			episodeId_lte?:scalar_Int;
			/**
			 * All values greater than the given value.
			*/
			episodeId_gt?:scalar_Int;
			/**
			 * All values greater than or equal the given value.
			*/
			episodeId_gte?:scalar_Int;
			id?:scalar_ID;
			/**
			 * All values that are not equal to given value.
			*/
			id_not?:scalar_ID;
			/**
			 * All values that are contained in given list.
			*/
			id_in:scalar_ID[];
			/**
			 * All values that are not contained in given list.
			*/
			id_not_in:scalar_ID[];
			/**
			 * All values less than the given value.
			*/
			id_lt?:scalar_ID;
			/**
			 * All values less than or equal the given value.
			*/
			id_lte?:scalar_ID;
			/**
			 * All values greater than the given value.
			*/
			id_gt?:scalar_ID;
			/**
			 * All values greater than or equal the given value.
			*/
			id_gte?:scalar_ID;
			/**
			 * All values containing the given string.
			*/
			id_contains?:scalar_ID;
			/**
			 * All values not containing the given string.
			*/
			id_not_contains?:scalar_ID;
			/**
			 * All values starting with the given string.
			*/
			id_starts_with?:scalar_ID;
			/**
			 * All values not starting with the given string.
			*/
			id_not_starts_with?:scalar_ID;
			/**
			 * All values ending with the given string.
			*/
			id_ends_with?:scalar_ID;
			/**
			 * All values not ending with the given string.
			*/
			id_not_ends_with?:scalar_ID;
			isPublished?:scalar_Boolean;
			/**
			 * All values that are not equal to given value.
			*/
			isPublished_not?:scalar_Boolean;
			openingCrawl?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			openingCrawl_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			openingCrawl_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			openingCrawl_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			openingCrawl_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			openingCrawl_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			openingCrawl_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			openingCrawl_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			openingCrawl_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			openingCrawl_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			openingCrawl_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			openingCrawl_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			openingCrawl_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			openingCrawl_not_ends_with?:scalar_String;
			releaseDate?:scalar_DateTime;
			/**
			 * All values that are not equal to given value.
			*/
			releaseDate_not?:scalar_DateTime;
			/**
			 * All values that are contained in given list.
			*/
			releaseDate_in:scalar_DateTime[];
			/**
			 * All values that are not contained in given list.
			*/
			releaseDate_not_in:scalar_DateTime[];
			/**
			 * All values less than the given value.
			*/
			releaseDate_lt?:scalar_DateTime;
			/**
			 * All values less than or equal the given value.
			*/
			releaseDate_lte?:scalar_DateTime;
			/**
			 * All values greater than the given value.
			*/
			releaseDate_gt?:scalar_DateTime;
			/**
			 * All values greater than or equal the given value.
			*/
			releaseDate_gte?:scalar_DateTime;
			title?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			title_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			title_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			title_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			title_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			title_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			title_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			title_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			title_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			title_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			title_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			title_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			title_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			title_not_ends_with?:scalar_String;
			updatedAt?:scalar_DateTime;
			/**
			 * All values that are not equal to given value.
			*/
			updatedAt_not?:scalar_DateTime;
			/**
			 * All values that are contained in given list.
			*/
			updatedAt_in:scalar_DateTime[];
			/**
			 * All values that are not contained in given list.
			*/
			updatedAt_not_in:scalar_DateTime[];
			/**
			 * All values less than the given value.
			*/
			updatedAt_lt?:scalar_DateTime;
			/**
			 * All values less than or equal the given value.
			*/
			updatedAt_lte?:scalar_DateTime;
			/**
			 * All values greater than the given value.
			*/
			updatedAt_gt?:scalar_DateTime;
			/**
			 * All values greater than or equal the given value.
			*/
			updatedAt_gte?:scalar_DateTime;
			characters_every?:PersonFilter;
			characters_some?:PersonFilter;
			characters_none?:PersonFilter;
			planets_every?:PlanetFilter;
			planets_some?:PlanetFilter;
			planets_none?:PlanetFilter;
			species_every?:SpeciesFilter;
			species_some?:SpeciesFilter;
			species_none?:SpeciesFilter;
			starships_every?:StarshipFilter;
			starships_some?:StarshipFilter;
			starships_none?:StarshipFilter;
			vehicles_every?:VehicleFilter;
			vehicles_some?:VehicleFilter;
			vehicles_none?:VehicleFilter
		};
	export type FilmOrderBy  = 'createdAt_ASC' | 'createdAt_DESC' | 'director_ASC' | 'director_DESC' | 'episodeId_ASC' | 'episodeId_DESC' | 'id_ASC' | 'id_DESC' | 'isPublished_ASC' | 'isPublished_DESC' | 'openingCrawl_ASC' | 'openingCrawl_DESC' | 'releaseDate_ASC' | 'releaseDate_DESC' | 'title_ASC' | 'title_DESC' | 'updatedAt_ASC' | 'updatedAt_DESC';
	/**
	 * An object with an ID
	*/
	export interface Node{
		payload:{
			__typename:string;
			id:scalar_ID
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
	export type PERSON_EYE_COLOR  = 'UNKNOWN' | 'BLUE' | 'YELLOW' | 'RED' | 'BROWN' | 'BLUEGREY' | 'BLACK' | 'ORANGE' | 'HAZEL' | 'PINK' | 'GOLD' | 'GREEN' | 'WHITE' | 'DARK';
	/**
	 *  The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender.
	*/
	export type PERSON_GENDER  = 'UNKNOWN' | 'MALE' | 'FEMALE' | 'HERMAPHRODITE';
	/**
	 * The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair.
	*/
	export type PERSON_HAIR_COLOR  = 'AUBURN' | 'BLACK' | 'BLONDE' | 'BROWN' | 'GREY' | 'UNKNOWN' | 'WHITE';
	/**
	 * The skin color of this person.
	*/
	export type PERSON_SKIN_COLOR  = 'UNKNOWN' | 'FAIR' | 'GOLD' | 'WHITE' | 'LIGHT' | 'GREEN' | 'GREENTAN' | 'PALE' | 'METAL' | 'DARK' | 'BROWNMOTTLE' | 'BROWN' | 'GREY' | 'MOTTLEDGREEN' | 'ORANGE' | 'BLUE' | 'RED' | 'YELLOW' | 'TAN' | 'SILVER';
	/**
	 * A Person is an individual person or character within the Star Wars universe
	*/
	export type Person = {
		payload:{
			/**
			 * The birth year of the person, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope.
			*/
			birthYear?:scalar_String;
			createdAt:scalar_DateTime;
			/**
			 * The eye color of this person. Will be "UNKNOWN" if not known or null if the person does not have an eye.
			*/
			eyeColor:PERSON_EYE_COLOR[];
			films:{
				payload:Arrayed<query["Film"]>['payload'];
				args?:{
					filter?:FilmFilter;
					orderBy?:FilmOrderBy;
					skip?:scalar_Int;
					after?:scalar_String;
					before?:scalar_String;
					first?:scalar_Int;
					last?:scalar_Int
				};
			};
			/**
			 *  The gender of this person. Will be "UNKNOWN" if not known or null if the person does not have a gender.
			*/
			gender?:PERSON_GENDER;
			/**
			 * The hair color of this person. Will be "UNKNOWN" if not known or null if the person does not have hair.
			*/
			hairColor:PERSON_HAIR_COLOR[];
			/**
			 * The height of the person in centimeters.
			*/
			height?:scalar_Int;
			homeworld?:{
				payload:query["Planet"]['payload'];
				args?:{
					filter?:PlanetFilter
				};
			};
			id:scalar_ID;
			/**
			 * indicates if the record is published
			*/
			isPublished:scalar_Boolean;
			/**
			 * The mass of the person in kilograms.
			*/
			mass?:scalar_Float;
			/**
			 * The name of this person.
			*/
			name:scalar_String;
			/**
			 * The skin color of this person.
			*/
			skinColor:PERSON_SKIN_COLOR[];
			species:{
				payload:Arrayed<query["Species"]>['payload'];
				args?:{
					filter?:SpeciesFilter;
					orderBy?:SpeciesOrderBy;
					skip?:scalar_Int;
					after?:scalar_String;
					before?:scalar_String;
					first?:scalar_Int;
					last?:scalar_Int
				};
			};
			starships:{
				payload:Arrayed<query["Starship"]>['payload'];
				args?:{
					filter?:StarshipFilter;
					orderBy?:StarshipOrderBy;
					skip?:scalar_Int;
					after?:scalar_String;
					before?:scalar_String;
					first?:scalar_Int;
					last?:scalar_Int
				};
			};
			updatedAt:scalar_DateTime;
			vehicles:{
				payload:Arrayed<query["Vehicle"]>['payload'];
				args?:{
					filter?:VehicleFilter;
					orderBy?:VehicleOrderBy;
					skip?:scalar_Int;
					after?:scalar_String;
					before?:scalar_String;
					first?:scalar_Int;
					last?:scalar_Int
				};
			};
			/**
			 * Meta information about the query.
			*/
			_filmsMeta:{
				payload:_QueryMeta['payload'];
				args?:{
					filter?:FilmFilter;
					orderBy?:FilmOrderBy;
					skip?:scalar_Int;
					after?:scalar_String;
					before?:scalar_String;
					first?:scalar_Int;
					last?:scalar_Int
				};
			};
			/**
			 * Meta information about the query.
			*/
			_speciesMeta:{
				payload:_QueryMeta['payload'];
				args?:{
					filter?:SpeciesFilter;
					orderBy?:SpeciesOrderBy;
					skip?:scalar_Int;
					after?:scalar_String;
					before?:scalar_String;
					first?:scalar_Int;
					last?:scalar_Int
				};
			};
			/**
			 * Meta information about the query.
			*/
			_starshipsMeta:{
				payload:_QueryMeta['payload'];
				args?:{
					filter?:StarshipFilter;
					orderBy?:StarshipOrderBy;
					skip?:scalar_Int;
					after?:scalar_String;
					before?:scalar_String;
					first?:scalar_Int;
					last?:scalar_Int
				};
			};
			/**
			 * Meta information about the query.
			*/
			_vehiclesMeta:{
				payload:_QueryMeta['payload'];
				args?:{
					filter?:VehicleFilter;
					orderBy?:VehicleOrderBy;
					skip?:scalar_Int;
					after?:scalar_String;
					before?:scalar_String;
					first?:scalar_Int;
					last?:scalar_Int
				};
			}
		};
	};
	export type PersonFilter = {
			/**
			 * Logical AND on all given filters.
			*/
			AND:PersonFilter[];
			/**
			 * Logical OR on all given filters.
			*/
			OR:PersonFilter[];
			birthYear?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			birthYear_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			birthYear_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			birthYear_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			birthYear_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			birthYear_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			birthYear_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			birthYear_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			birthYear_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			birthYear_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			birthYear_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			birthYear_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			birthYear_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			birthYear_not_ends_with?:scalar_String;
			createdAt?:scalar_DateTime;
			/**
			 * All values that are not equal to given value.
			*/
			createdAt_not?:scalar_DateTime;
			/**
			 * All values that are contained in given list.
			*/
			createdAt_in:scalar_DateTime[];
			/**
			 * All values that are not contained in given list.
			*/
			createdAt_not_in:scalar_DateTime[];
			/**
			 * All values less than the given value.
			*/
			createdAt_lt?:scalar_DateTime;
			/**
			 * All values less than or equal the given value.
			*/
			createdAt_lte?:scalar_DateTime;
			/**
			 * All values greater than the given value.
			*/
			createdAt_gt?:scalar_DateTime;
			/**
			 * All values greater than or equal the given value.
			*/
			createdAt_gte?:scalar_DateTime;
			gender?:PERSON_GENDER;
			/**
			 * All values that are not equal to given value.
			*/
			gender_not?:PERSON_GENDER;
			/**
			 * All values that are contained in given list.
			*/
			gender_in:PERSON_GENDER[];
			/**
			 * All values that are not contained in given list.
			*/
			gender_not_in:PERSON_GENDER[];
			height?:scalar_Int;
			/**
			 * All values that are not equal to given value.
			*/
			height_not?:scalar_Int;
			/**
			 * All values that are contained in given list.
			*/
			height_in:scalar_Int[];
			/**
			 * All values that are not contained in given list.
			*/
			height_not_in:scalar_Int[];
			/**
			 * All values less than the given value.
			*/
			height_lt?:scalar_Int;
			/**
			 * All values less than or equal the given value.
			*/
			height_lte?:scalar_Int;
			/**
			 * All values greater than the given value.
			*/
			height_gt?:scalar_Int;
			/**
			 * All values greater than or equal the given value.
			*/
			height_gte?:scalar_Int;
			id?:scalar_ID;
			/**
			 * All values that are not equal to given value.
			*/
			id_not?:scalar_ID;
			/**
			 * All values that are contained in given list.
			*/
			id_in:scalar_ID[];
			/**
			 * All values that are not contained in given list.
			*/
			id_not_in:scalar_ID[];
			/**
			 * All values less than the given value.
			*/
			id_lt?:scalar_ID;
			/**
			 * All values less than or equal the given value.
			*/
			id_lte?:scalar_ID;
			/**
			 * All values greater than the given value.
			*/
			id_gt?:scalar_ID;
			/**
			 * All values greater than or equal the given value.
			*/
			id_gte?:scalar_ID;
			/**
			 * All values containing the given string.
			*/
			id_contains?:scalar_ID;
			/**
			 * All values not containing the given string.
			*/
			id_not_contains?:scalar_ID;
			/**
			 * All values starting with the given string.
			*/
			id_starts_with?:scalar_ID;
			/**
			 * All values not starting with the given string.
			*/
			id_not_starts_with?:scalar_ID;
			/**
			 * All values ending with the given string.
			*/
			id_ends_with?:scalar_ID;
			/**
			 * All values not ending with the given string.
			*/
			id_not_ends_with?:scalar_ID;
			isPublished?:scalar_Boolean;
			/**
			 * All values that are not equal to given value.
			*/
			isPublished_not?:scalar_Boolean;
			mass?:scalar_Float;
			/**
			 * All values that are not equal to given value.
			*/
			mass_not?:scalar_Float;
			/**
			 * All values that are contained in given list.
			*/
			mass_in:scalar_Float[];
			/**
			 * All values that are not contained in given list.
			*/
			mass_not_in:scalar_Float[];
			/**
			 * All values less than the given value.
			*/
			mass_lt?:scalar_Float;
			/**
			 * All values less than or equal the given value.
			*/
			mass_lte?:scalar_Float;
			/**
			 * All values greater than the given value.
			*/
			mass_gt?:scalar_Float;
			/**
			 * All values greater than or equal the given value.
			*/
			mass_gte?:scalar_Float;
			name?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			name_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			name_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			name_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			name_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			name_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			name_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			name_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			name_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			name_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			name_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			name_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			name_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			name_not_ends_with?:scalar_String;
			updatedAt?:scalar_DateTime;
			/**
			 * All values that are not equal to given value.
			*/
			updatedAt_not?:scalar_DateTime;
			/**
			 * All values that are contained in given list.
			*/
			updatedAt_in:scalar_DateTime[];
			/**
			 * All values that are not contained in given list.
			*/
			updatedAt_not_in:scalar_DateTime[];
			/**
			 * All values less than the given value.
			*/
			updatedAt_lt?:scalar_DateTime;
			/**
			 * All values less than or equal the given value.
			*/
			updatedAt_lte?:scalar_DateTime;
			/**
			 * All values greater than the given value.
			*/
			updatedAt_gt?:scalar_DateTime;
			/**
			 * All values greater than or equal the given value.
			*/
			updatedAt_gte?:scalar_DateTime;
			films_every?:FilmFilter;
			films_some?:FilmFilter;
			films_none?:FilmFilter;
			homeworld?:PlanetFilter;
			species_every?:SpeciesFilter;
			species_some?:SpeciesFilter;
			species_none?:SpeciesFilter;
			starships_every?:StarshipFilter;
			starships_some?:StarshipFilter;
			starships_none?:StarshipFilter;
			vehicles_every?:VehicleFilter;
			vehicles_some?:VehicleFilter;
			vehicles_none?:VehicleFilter
		};
	export type PersonOrderBy  = 'birthYear_ASC' | 'birthYear_DESC' | 'createdAt_ASC' | 'createdAt_DESC' | 'gender_ASC' | 'gender_DESC' | 'height_ASC' | 'height_DESC' | 'id_ASC' | 'id_DESC' | 'isPublished_ASC' | 'isPublished_DESC' | 'mass_ASC' | 'mass_DESC' | 'name_ASC' | 'name_DESC' | 'updatedAt_ASC' | 'updatedAt_DESC';
	/**
	 * A Planet is a large mass, planet or planetoid in the Star Wars Universe, at the time of 0 ABY.
	*/
	export type Planet = {
		payload:{
			/**
			 * The climate of this planet.
			*/
			climate:scalar_String[];
			createdAt:scalar_DateTime;
			/**
			 * The diameter of this planet in kilometers.
			*/
			diameter?:scalar_Int;
			films:{
				payload:Arrayed<query["Film"]>['payload'];
				args?:{
					filter?:FilmFilter;
					orderBy?:FilmOrderBy;
					skip?:scalar_Int;
					after?:scalar_String;
					before?:scalar_String;
					first?:scalar_Int;
					last?:scalar_Int
				};
			};
			/**
			 * A number denoting the gravity of this planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
			*/
			gravity?:scalar_String;
			id:scalar_ID;
			/**
			 * indicates if the record is published
			*/
			isPublished:scalar_Boolean;
			/**
			 * The name of the planet
			*/
			name:scalar_String;
			/**
			 * The number of standard days it takes for this planet to complete a single orbit of its local star.
			*/
			orbitalPeriod?:scalar_Int;
			/**
			 * The average population of sentient beings inhabiting this planet.
			*/
			population?:scalar_Float;
			residents:{
				payload:Arrayed<query["Person"]>['payload'];
				args?:{
					filter?:PersonFilter;
					orderBy?:PersonOrderBy;
					skip?:scalar_Int;
					after?:scalar_String;
					before?:scalar_String;
					first?:scalar_Int;
					last?:scalar_Int
				};
			};
			/**
			 * The number of standard hours it takes for this planet to complete a single rotation on its axis.
			*/
			rotationPeriod?:scalar_Int;
			/**
			 * The percentage of the planet surface that is naturally occurring water or bodies of water.
			*/
			surfaceWater?:scalar_Float;
			/**
			 * The terrain of this planet.
			*/
			terrain:scalar_String[];
			updatedAt:scalar_DateTime;
			/**
			 * Meta information about the query.
			*/
			_filmsMeta:{
				payload:_QueryMeta['payload'];
				args?:{
					filter?:FilmFilter;
					orderBy?:FilmOrderBy;
					skip?:scalar_Int;
					after?:scalar_String;
					before?:scalar_String;
					first?:scalar_Int;
					last?:scalar_Int
				};
			};
			/**
			 * Meta information about the query.
			*/
			_residentsMeta:{
				payload:_QueryMeta['payload'];
				args?:{
					filter?:PersonFilter;
					orderBy?:PersonOrderBy;
					skip?:scalar_Int;
					after?:scalar_String;
					before?:scalar_String;
					first?:scalar_Int;
					last?:scalar_Int
				};
			}
		};
	};
	export type PlanetFilter = {
			/**
			 * Logical AND on all given filters.
			*/
			AND:PlanetFilter[];
			/**
			 * Logical OR on all given filters.
			*/
			OR:PlanetFilter[];
			createdAt?:scalar_DateTime;
			/**
			 * All values that are not equal to given value.
			*/
			createdAt_not?:scalar_DateTime;
			/**
			 * All values that are contained in given list.
			*/
			createdAt_in:scalar_DateTime[];
			/**
			 * All values that are not contained in given list.
			*/
			createdAt_not_in:scalar_DateTime[];
			/**
			 * All values less than the given value.
			*/
			createdAt_lt?:scalar_DateTime;
			/**
			 * All values less than or equal the given value.
			*/
			createdAt_lte?:scalar_DateTime;
			/**
			 * All values greater than the given value.
			*/
			createdAt_gt?:scalar_DateTime;
			/**
			 * All values greater than or equal the given value.
			*/
			createdAt_gte?:scalar_DateTime;
			diameter?:scalar_Int;
			/**
			 * All values that are not equal to given value.
			*/
			diameter_not?:scalar_Int;
			/**
			 * All values that are contained in given list.
			*/
			diameter_in:scalar_Int[];
			/**
			 * All values that are not contained in given list.
			*/
			diameter_not_in:scalar_Int[];
			/**
			 * All values less than the given value.
			*/
			diameter_lt?:scalar_Int;
			/**
			 * All values less than or equal the given value.
			*/
			diameter_lte?:scalar_Int;
			/**
			 * All values greater than the given value.
			*/
			diameter_gt?:scalar_Int;
			/**
			 * All values greater than or equal the given value.
			*/
			diameter_gte?:scalar_Int;
			gravity?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			gravity_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			gravity_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			gravity_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			gravity_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			gravity_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			gravity_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			gravity_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			gravity_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			gravity_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			gravity_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			gravity_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			gravity_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			gravity_not_ends_with?:scalar_String;
			id?:scalar_ID;
			/**
			 * All values that are not equal to given value.
			*/
			id_not?:scalar_ID;
			/**
			 * All values that are contained in given list.
			*/
			id_in:scalar_ID[];
			/**
			 * All values that are not contained in given list.
			*/
			id_not_in:scalar_ID[];
			/**
			 * All values less than the given value.
			*/
			id_lt?:scalar_ID;
			/**
			 * All values less than or equal the given value.
			*/
			id_lte?:scalar_ID;
			/**
			 * All values greater than the given value.
			*/
			id_gt?:scalar_ID;
			/**
			 * All values greater than or equal the given value.
			*/
			id_gte?:scalar_ID;
			/**
			 * All values containing the given string.
			*/
			id_contains?:scalar_ID;
			/**
			 * All values not containing the given string.
			*/
			id_not_contains?:scalar_ID;
			/**
			 * All values starting with the given string.
			*/
			id_starts_with?:scalar_ID;
			/**
			 * All values not starting with the given string.
			*/
			id_not_starts_with?:scalar_ID;
			/**
			 * All values ending with the given string.
			*/
			id_ends_with?:scalar_ID;
			/**
			 * All values not ending with the given string.
			*/
			id_not_ends_with?:scalar_ID;
			isPublished?:scalar_Boolean;
			/**
			 * All values that are not equal to given value.
			*/
			isPublished_not?:scalar_Boolean;
			name?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			name_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			name_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			name_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			name_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			name_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			name_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			name_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			name_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			name_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			name_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			name_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			name_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			name_not_ends_with?:scalar_String;
			orbitalPeriod?:scalar_Int;
			/**
			 * All values that are not equal to given value.
			*/
			orbitalPeriod_not?:scalar_Int;
			/**
			 * All values that are contained in given list.
			*/
			orbitalPeriod_in:scalar_Int[];
			/**
			 * All values that are not contained in given list.
			*/
			orbitalPeriod_not_in:scalar_Int[];
			/**
			 * All values less than the given value.
			*/
			orbitalPeriod_lt?:scalar_Int;
			/**
			 * All values less than or equal the given value.
			*/
			orbitalPeriod_lte?:scalar_Int;
			/**
			 * All values greater than the given value.
			*/
			orbitalPeriod_gt?:scalar_Int;
			/**
			 * All values greater than or equal the given value.
			*/
			orbitalPeriod_gte?:scalar_Int;
			population?:scalar_Float;
			/**
			 * All values that are not equal to given value.
			*/
			population_not?:scalar_Float;
			/**
			 * All values that are contained in given list.
			*/
			population_in:scalar_Float[];
			/**
			 * All values that are not contained in given list.
			*/
			population_not_in:scalar_Float[];
			/**
			 * All values less than the given value.
			*/
			population_lt?:scalar_Float;
			/**
			 * All values less than or equal the given value.
			*/
			population_lte?:scalar_Float;
			/**
			 * All values greater than the given value.
			*/
			population_gt?:scalar_Float;
			/**
			 * All values greater than or equal the given value.
			*/
			population_gte?:scalar_Float;
			rotationPeriod?:scalar_Int;
			/**
			 * All values that are not equal to given value.
			*/
			rotationPeriod_not?:scalar_Int;
			/**
			 * All values that are contained in given list.
			*/
			rotationPeriod_in:scalar_Int[];
			/**
			 * All values that are not contained in given list.
			*/
			rotationPeriod_not_in:scalar_Int[];
			/**
			 * All values less than the given value.
			*/
			rotationPeriod_lt?:scalar_Int;
			/**
			 * All values less than or equal the given value.
			*/
			rotationPeriod_lte?:scalar_Int;
			/**
			 * All values greater than the given value.
			*/
			rotationPeriod_gt?:scalar_Int;
			/**
			 * All values greater than or equal the given value.
			*/
			rotationPeriod_gte?:scalar_Int;
			surfaceWater?:scalar_Float;
			/**
			 * All values that are not equal to given value.
			*/
			surfaceWater_not?:scalar_Float;
			/**
			 * All values that are contained in given list.
			*/
			surfaceWater_in:scalar_Float[];
			/**
			 * All values that are not contained in given list.
			*/
			surfaceWater_not_in:scalar_Float[];
			/**
			 * All values less than the given value.
			*/
			surfaceWater_lt?:scalar_Float;
			/**
			 * All values less than or equal the given value.
			*/
			surfaceWater_lte?:scalar_Float;
			/**
			 * All values greater than the given value.
			*/
			surfaceWater_gt?:scalar_Float;
			/**
			 * All values greater than or equal the given value.
			*/
			surfaceWater_gte?:scalar_Float;
			updatedAt?:scalar_DateTime;
			/**
			 * All values that are not equal to given value.
			*/
			updatedAt_not?:scalar_DateTime;
			/**
			 * All values that are contained in given list.
			*/
			updatedAt_in:scalar_DateTime[];
			/**
			 * All values that are not contained in given list.
			*/
			updatedAt_not_in:scalar_DateTime[];
			/**
			 * All values less than the given value.
			*/
			updatedAt_lt?:scalar_DateTime;
			/**
			 * All values less than or equal the given value.
			*/
			updatedAt_lte?:scalar_DateTime;
			/**
			 * All values greater than the given value.
			*/
			updatedAt_gt?:scalar_DateTime;
			/**
			 * All values greater than or equal the given value.
			*/
			updatedAt_gte?:scalar_DateTime;
			films_every?:FilmFilter;
			films_some?:FilmFilter;
			films_none?:FilmFilter;
			residents_every?:PersonFilter;
			residents_some?:PersonFilter;
			residents_none?:PersonFilter
		};
	export type PlanetOrderBy  = 'createdAt_ASC' | 'createdAt_DESC' | 'diameter_ASC' | 'diameter_DESC' | 'gravity_ASC' | 'gravity_DESC' | 'id_ASC' | 'id_DESC' | 'isPublished_ASC' | 'isPublished_DESC' | 'name_ASC' | 'name_DESC' | 'orbitalPeriod_ASC' | 'orbitalPeriod_DESC' | 'population_ASC' | 'population_DESC' | 'rotationPeriod_ASC' | 'rotationPeriod_DESC' | 'surfaceWater_ASC' | 'surfaceWater_DESC' | 'updatedAt_ASC' | 'updatedAt_DESC';
	/**
	 * The eye colors for this species, "UNKNOWN" if not known, null if this species does not typically have eyes.
	*/
	export type SPECIES_EYE_COLOR  = 'AMBER' | 'BLACK' | 'BLUE' | 'BROWN' | 'GOLD' | 'GREEN' | 'GREY' | 'HAZEL' | 'INDIGO' | 'ORANGE' | 'PINK' | 'RED' | 'SILVER' | 'UNKNOWN' | 'YELLOW' | 'GOLDEN';
	/**
	 * The hair colors for this species, "UNKNOWN" if not known, null if this species does not typically have hairs.
	*/
	export type SPECIES_HAIR_COLOR  = 'UNKNOWN' | 'BROWN' | 'WHITE' | 'RED' | 'BLACK' | 'BLONDE';
	/**
	 * The skin colors for this species, "UNKNOWN" if not known, null if this species does not typically have a skin.
	*/
	export type SPECIES_SKIN_COLOR  = 'BLUE' | 'BROWN' | 'CAUCASIAN' | 'DARK' | 'GREEN' | 'GREY' | 'MAGENTA' | 'ORANGE' | 'PALE' | 'PALEPINK' | 'PEACH' | 'PINK' | 'PURPLE' | 'RED' | 'TAN' | 'UNKNOWN' | 'WHITE' | 'YELLOW' | 'BLACK' | 'ASIAN' | 'HISPANIC';
	/**
	 * A Species is a type of person or character within the Star Wars Universe.
	*/
	export type Species = {
		payload:{
			/**
			 * The average height of this species in centimeters.
			*/
			averageHeight?:scalar_Int;
			/**
			 * The average lifespan of this species in years.
			*/
			averageLifespan?:scalar_Int;
			/**
			 * The classification of this species, such as "mammal" or "reptile".
			*/
			classification?:scalar_String;
			createdAt:scalar_DateTime;
			/**
			 * The designation of this species, such as "sentient".
			*/
			designation?:scalar_String;
			/**
			 * The eye colors for this species, "UNKNOWN" if not known, null if this species does not typically have eyes.
			*/
			eyeColor:SPECIES_EYE_COLOR[];
			films:{
				payload:Arrayed<query["Film"]>['payload'];
				args?:{
					filter?:FilmFilter;
					orderBy?:FilmOrderBy;
					skip?:scalar_Int;
					after?:scalar_String;
					before?:scalar_String;
					first?:scalar_Int;
					last?:scalar_Int
				};
			};
			/**
			 * The hair colors for this species, "UNKNOWN" if not known, null if this species does not typically have hairs.
			*/
			hairColor:SPECIES_HAIR_COLOR[];
			id:scalar_ID;
			/**
			 * indicates if the record is published
			*/
			isPublished:scalar_Boolean;
			/**
			 * The language commonly spoken by this species.
			*/
			language?:scalar_String;
			/**
			 * The name of this species.
			*/
			name:scalar_String;
			people:{
				payload:Arrayed<query["Person"]>['payload'];
				args?:{
					filter?:PersonFilter;
					orderBy?:PersonOrderBy;
					skip?:scalar_Int;
					after?:scalar_String;
					before?:scalar_String;
					first?:scalar_Int;
					last?:scalar_Int
				};
			};
			/**
			 * The skin colors for this species, "UNKNOWN" if not known, null if this species does not typically have a skin.
			*/
			skinColor:SPECIES_SKIN_COLOR[];
			updatedAt:scalar_DateTime;
			/**
			 * Meta information about the query.
			*/
			_filmsMeta:{
				payload:_QueryMeta['payload'];
				args?:{
					filter?:FilmFilter;
					orderBy?:FilmOrderBy;
					skip?:scalar_Int;
					after?:scalar_String;
					before?:scalar_String;
					first?:scalar_Int;
					last?:scalar_Int
				};
			};
			/**
			 * Meta information about the query.
			*/
			_peopleMeta:{
				payload:_QueryMeta['payload'];
				args?:{
					filter?:PersonFilter;
					orderBy?:PersonOrderBy;
					skip?:scalar_Int;
					after?:scalar_String;
					before?:scalar_String;
					first?:scalar_Int;
					last?:scalar_Int
				};
			}
		};
	};
	export type SpeciesFilter = {
			/**
			 * Logical AND on all given filters.
			*/
			AND:SpeciesFilter[];
			/**
			 * Logical OR on all given filters.
			*/
			OR:SpeciesFilter[];
			averageHeight?:scalar_Int;
			/**
			 * All values that are not equal to given value.
			*/
			averageHeight_not?:scalar_Int;
			/**
			 * All values that are contained in given list.
			*/
			averageHeight_in:scalar_Int[];
			/**
			 * All values that are not contained in given list.
			*/
			averageHeight_not_in:scalar_Int[];
			/**
			 * All values less than the given value.
			*/
			averageHeight_lt?:scalar_Int;
			/**
			 * All values less than or equal the given value.
			*/
			averageHeight_lte?:scalar_Int;
			/**
			 * All values greater than the given value.
			*/
			averageHeight_gt?:scalar_Int;
			/**
			 * All values greater than or equal the given value.
			*/
			averageHeight_gte?:scalar_Int;
			averageLifespan?:scalar_Int;
			/**
			 * All values that are not equal to given value.
			*/
			averageLifespan_not?:scalar_Int;
			/**
			 * All values that are contained in given list.
			*/
			averageLifespan_in:scalar_Int[];
			/**
			 * All values that are not contained in given list.
			*/
			averageLifespan_not_in:scalar_Int[];
			/**
			 * All values less than the given value.
			*/
			averageLifespan_lt?:scalar_Int;
			/**
			 * All values less than or equal the given value.
			*/
			averageLifespan_lte?:scalar_Int;
			/**
			 * All values greater than the given value.
			*/
			averageLifespan_gt?:scalar_Int;
			/**
			 * All values greater than or equal the given value.
			*/
			averageLifespan_gte?:scalar_Int;
			classification?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			classification_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			classification_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			classification_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			classification_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			classification_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			classification_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			classification_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			classification_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			classification_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			classification_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			classification_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			classification_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			classification_not_ends_with?:scalar_String;
			createdAt?:scalar_DateTime;
			/**
			 * All values that are not equal to given value.
			*/
			createdAt_not?:scalar_DateTime;
			/**
			 * All values that are contained in given list.
			*/
			createdAt_in:scalar_DateTime[];
			/**
			 * All values that are not contained in given list.
			*/
			createdAt_not_in:scalar_DateTime[];
			/**
			 * All values less than the given value.
			*/
			createdAt_lt?:scalar_DateTime;
			/**
			 * All values less than or equal the given value.
			*/
			createdAt_lte?:scalar_DateTime;
			/**
			 * All values greater than the given value.
			*/
			createdAt_gt?:scalar_DateTime;
			/**
			 * All values greater than or equal the given value.
			*/
			createdAt_gte?:scalar_DateTime;
			designation?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			designation_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			designation_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			designation_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			designation_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			designation_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			designation_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			designation_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			designation_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			designation_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			designation_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			designation_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			designation_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			designation_not_ends_with?:scalar_String;
			id?:scalar_ID;
			/**
			 * All values that are not equal to given value.
			*/
			id_not?:scalar_ID;
			/**
			 * All values that are contained in given list.
			*/
			id_in:scalar_ID[];
			/**
			 * All values that are not contained in given list.
			*/
			id_not_in:scalar_ID[];
			/**
			 * All values less than the given value.
			*/
			id_lt?:scalar_ID;
			/**
			 * All values less than or equal the given value.
			*/
			id_lte?:scalar_ID;
			/**
			 * All values greater than the given value.
			*/
			id_gt?:scalar_ID;
			/**
			 * All values greater than or equal the given value.
			*/
			id_gte?:scalar_ID;
			/**
			 * All values containing the given string.
			*/
			id_contains?:scalar_ID;
			/**
			 * All values not containing the given string.
			*/
			id_not_contains?:scalar_ID;
			/**
			 * All values starting with the given string.
			*/
			id_starts_with?:scalar_ID;
			/**
			 * All values not starting with the given string.
			*/
			id_not_starts_with?:scalar_ID;
			/**
			 * All values ending with the given string.
			*/
			id_ends_with?:scalar_ID;
			/**
			 * All values not ending with the given string.
			*/
			id_not_ends_with?:scalar_ID;
			isPublished?:scalar_Boolean;
			/**
			 * All values that are not equal to given value.
			*/
			isPublished_not?:scalar_Boolean;
			language?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			language_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			language_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			language_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			language_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			language_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			language_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			language_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			language_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			language_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			language_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			language_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			language_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			language_not_ends_with?:scalar_String;
			name?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			name_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			name_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			name_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			name_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			name_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			name_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			name_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			name_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			name_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			name_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			name_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			name_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			name_not_ends_with?:scalar_String;
			updatedAt?:scalar_DateTime;
			/**
			 * All values that are not equal to given value.
			*/
			updatedAt_not?:scalar_DateTime;
			/**
			 * All values that are contained in given list.
			*/
			updatedAt_in:scalar_DateTime[];
			/**
			 * All values that are not contained in given list.
			*/
			updatedAt_not_in:scalar_DateTime[];
			/**
			 * All values less than the given value.
			*/
			updatedAt_lt?:scalar_DateTime;
			/**
			 * All values less than or equal the given value.
			*/
			updatedAt_lte?:scalar_DateTime;
			/**
			 * All values greater than the given value.
			*/
			updatedAt_gt?:scalar_DateTime;
			/**
			 * All values greater than or equal the given value.
			*/
			updatedAt_gte?:scalar_DateTime;
			films_every?:FilmFilter;
			films_some?:FilmFilter;
			films_none?:FilmFilter;
			people_every?:PersonFilter;
			people_some?:PersonFilter;
			people_none?:PersonFilter
		};
	export type SpeciesOrderBy  = 'averageHeight_ASC' | 'averageHeight_DESC' | 'averageLifespan_ASC' | 'averageLifespan_DESC' | 'classification_ASC' | 'classification_DESC' | 'createdAt_ASC' | 'createdAt_DESC' | 'designation_ASC' | 'designation_DESC' | 'id_ASC' | 'id_DESC' | 'isPublished_ASC' | 'isPublished_DESC' | 'language_ASC' | 'language_DESC' | 'name_ASC' | 'name_DESC' | 'updatedAt_ASC' | 'updatedAt_DESC';
	/**
	 * A Starship is a single transport craft that has hyperdrive capability.
	*/
	export type Starship = {
		payload:{
			/**
			 * The maximum number of kilograms that this starship can transport.
			*/
			cargoCapacity?:scalar_Float;
			/**
			 * The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation"
			*/
			class?:scalar_String;
			/**
			 * The maximum length of time that this starship can provide consumables for its entire crew without having to resupply.
			*/
			consumables?:scalar_String;
			/**
			 *  The cost of this starship new, in galactic credits.
			*/
			costInCredits?:scalar_Float;
			createdAt:scalar_DateTime;
			/**
			 * The number of personnel needed to run or pilot this starship.
			*/
			crew?:scalar_Int;
			films:{
				payload:Arrayed<query["Film"]>['payload'];
				args?:{
					filter?:FilmFilter;
					orderBy?:FilmOrderBy;
					skip?:scalar_Int;
					after?:scalar_String;
					before?:scalar_String;
					first?:scalar_Int;
					last?:scalar_Int
				};
			};
			/**
			 * The class of this starships hyperdrive.
			*/
			hyperdriveRating?:scalar_Float;
			id:scalar_ID;
			/**
			 * indicates if the record is published
			*/
			isPublished:scalar_Boolean;
			/**
			 * The length of this starship in meters.
			*/
			length?:scalar_Float;
			/**
			 * The manufacturer of this starship.
			*/
			manufacturer:scalar_String[];
			/**
			 *  The maximum speed of this starship in the atmosphere. null if this starship is incapable of atmospheric flight.
			*/
			maxAtmospheringSpeed?:scalar_Int;
			/**
			 * The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe.
			*/
			mglt?:scalar_Int;
			/**
			 * The name of this starship. The common name, such as "Death Star".
			*/
			name:scalar_String;
			/**
			 *  The number of non-essential people this starship can transport.
			*/
			passengers?:scalar_Int;
			pilots:{
				payload:Arrayed<query["Person"]>['payload'];
				args?:{
					filter?:PersonFilter;
					orderBy?:PersonOrderBy;
					skip?:scalar_Int;
					after?:scalar_String;
					before?:scalar_String;
					first?:scalar_Int;
					last?:scalar_Int
				};
			};
			updatedAt:scalar_DateTime;
			/**
			 * Meta information about the query.
			*/
			_filmsMeta:{
				payload:_QueryMeta['payload'];
				args?:{
					filter?:FilmFilter;
					orderBy?:FilmOrderBy;
					skip?:scalar_Int;
					after?:scalar_String;
					before?:scalar_String;
					first?:scalar_Int;
					last?:scalar_Int
				};
			};
			/**
			 * Meta information about the query.
			*/
			_pilotsMeta:{
				payload:_QueryMeta['payload'];
				args?:{
					filter?:PersonFilter;
					orderBy?:PersonOrderBy;
					skip?:scalar_Int;
					after?:scalar_String;
					before?:scalar_String;
					first?:scalar_Int;
					last?:scalar_Int
				};
			}
		};
	};
	export type StarshipFilter = {
			/**
			 * Logical AND on all given filters.
			*/
			AND:StarshipFilter[];
			/**
			 * Logical OR on all given filters.
			*/
			OR:StarshipFilter[];
			cargoCapacity?:scalar_Float;
			/**
			 * All values that are not equal to given value.
			*/
			cargoCapacity_not?:scalar_Float;
			/**
			 * All values that are contained in given list.
			*/
			cargoCapacity_in:scalar_Float[];
			/**
			 * All values that are not contained in given list.
			*/
			cargoCapacity_not_in:scalar_Float[];
			/**
			 * All values less than the given value.
			*/
			cargoCapacity_lt?:scalar_Float;
			/**
			 * All values less than or equal the given value.
			*/
			cargoCapacity_lte?:scalar_Float;
			/**
			 * All values greater than the given value.
			*/
			cargoCapacity_gt?:scalar_Float;
			/**
			 * All values greater than or equal the given value.
			*/
			cargoCapacity_gte?:scalar_Float;
			class?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			class_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			class_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			class_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			class_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			class_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			class_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			class_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			class_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			class_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			class_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			class_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			class_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			class_not_ends_with?:scalar_String;
			consumables?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			consumables_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			consumables_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			consumables_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			consumables_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			consumables_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			consumables_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			consumables_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			consumables_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			consumables_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			consumables_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			consumables_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			consumables_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			consumables_not_ends_with?:scalar_String;
			costInCredits?:scalar_Float;
			/**
			 * All values that are not equal to given value.
			*/
			costInCredits_not?:scalar_Float;
			/**
			 * All values that are contained in given list.
			*/
			costInCredits_in:scalar_Float[];
			/**
			 * All values that are not contained in given list.
			*/
			costInCredits_not_in:scalar_Float[];
			/**
			 * All values less than the given value.
			*/
			costInCredits_lt?:scalar_Float;
			/**
			 * All values less than or equal the given value.
			*/
			costInCredits_lte?:scalar_Float;
			/**
			 * All values greater than the given value.
			*/
			costInCredits_gt?:scalar_Float;
			/**
			 * All values greater than or equal the given value.
			*/
			costInCredits_gte?:scalar_Float;
			createdAt?:scalar_DateTime;
			/**
			 * All values that are not equal to given value.
			*/
			createdAt_not?:scalar_DateTime;
			/**
			 * All values that are contained in given list.
			*/
			createdAt_in:scalar_DateTime[];
			/**
			 * All values that are not contained in given list.
			*/
			createdAt_not_in:scalar_DateTime[];
			/**
			 * All values less than the given value.
			*/
			createdAt_lt?:scalar_DateTime;
			/**
			 * All values less than or equal the given value.
			*/
			createdAt_lte?:scalar_DateTime;
			/**
			 * All values greater than the given value.
			*/
			createdAt_gt?:scalar_DateTime;
			/**
			 * All values greater than or equal the given value.
			*/
			createdAt_gte?:scalar_DateTime;
			crew?:scalar_Int;
			/**
			 * All values that are not equal to given value.
			*/
			crew_not?:scalar_Int;
			/**
			 * All values that are contained in given list.
			*/
			crew_in:scalar_Int[];
			/**
			 * All values that are not contained in given list.
			*/
			crew_not_in:scalar_Int[];
			/**
			 * All values less than the given value.
			*/
			crew_lt?:scalar_Int;
			/**
			 * All values less than or equal the given value.
			*/
			crew_lte?:scalar_Int;
			/**
			 * All values greater than the given value.
			*/
			crew_gt?:scalar_Int;
			/**
			 * All values greater than or equal the given value.
			*/
			crew_gte?:scalar_Int;
			hyperdriveRating?:scalar_Float;
			/**
			 * All values that are not equal to given value.
			*/
			hyperdriveRating_not?:scalar_Float;
			/**
			 * All values that are contained in given list.
			*/
			hyperdriveRating_in:scalar_Float[];
			/**
			 * All values that are not contained in given list.
			*/
			hyperdriveRating_not_in:scalar_Float[];
			/**
			 * All values less than the given value.
			*/
			hyperdriveRating_lt?:scalar_Float;
			/**
			 * All values less than or equal the given value.
			*/
			hyperdriveRating_lte?:scalar_Float;
			/**
			 * All values greater than the given value.
			*/
			hyperdriveRating_gt?:scalar_Float;
			/**
			 * All values greater than or equal the given value.
			*/
			hyperdriveRating_gte?:scalar_Float;
			id?:scalar_ID;
			/**
			 * All values that are not equal to given value.
			*/
			id_not?:scalar_ID;
			/**
			 * All values that are contained in given list.
			*/
			id_in:scalar_ID[];
			/**
			 * All values that are not contained in given list.
			*/
			id_not_in:scalar_ID[];
			/**
			 * All values less than the given value.
			*/
			id_lt?:scalar_ID;
			/**
			 * All values less than or equal the given value.
			*/
			id_lte?:scalar_ID;
			/**
			 * All values greater than the given value.
			*/
			id_gt?:scalar_ID;
			/**
			 * All values greater than or equal the given value.
			*/
			id_gte?:scalar_ID;
			/**
			 * All values containing the given string.
			*/
			id_contains?:scalar_ID;
			/**
			 * All values not containing the given string.
			*/
			id_not_contains?:scalar_ID;
			/**
			 * All values starting with the given string.
			*/
			id_starts_with?:scalar_ID;
			/**
			 * All values not starting with the given string.
			*/
			id_not_starts_with?:scalar_ID;
			/**
			 * All values ending with the given string.
			*/
			id_ends_with?:scalar_ID;
			/**
			 * All values not ending with the given string.
			*/
			id_not_ends_with?:scalar_ID;
			isPublished?:scalar_Boolean;
			/**
			 * All values that are not equal to given value.
			*/
			isPublished_not?:scalar_Boolean;
			length?:scalar_Float;
			/**
			 * All values that are not equal to given value.
			*/
			length_not?:scalar_Float;
			/**
			 * All values that are contained in given list.
			*/
			length_in:scalar_Float[];
			/**
			 * All values that are not contained in given list.
			*/
			length_not_in:scalar_Float[];
			/**
			 * All values less than the given value.
			*/
			length_lt?:scalar_Float;
			/**
			 * All values less than or equal the given value.
			*/
			length_lte?:scalar_Float;
			/**
			 * All values greater than the given value.
			*/
			length_gt?:scalar_Float;
			/**
			 * All values greater than or equal the given value.
			*/
			length_gte?:scalar_Float;
			maxAtmospheringSpeed?:scalar_Int;
			/**
			 * All values that are not equal to given value.
			*/
			maxAtmospheringSpeed_not?:scalar_Int;
			/**
			 * All values that are contained in given list.
			*/
			maxAtmospheringSpeed_in:scalar_Int[];
			/**
			 * All values that are not contained in given list.
			*/
			maxAtmospheringSpeed_not_in:scalar_Int[];
			/**
			 * All values less than the given value.
			*/
			maxAtmospheringSpeed_lt?:scalar_Int;
			/**
			 * All values less than or equal the given value.
			*/
			maxAtmospheringSpeed_lte?:scalar_Int;
			/**
			 * All values greater than the given value.
			*/
			maxAtmospheringSpeed_gt?:scalar_Int;
			/**
			 * All values greater than or equal the given value.
			*/
			maxAtmospheringSpeed_gte?:scalar_Int;
			mglt?:scalar_Int;
			/**
			 * All values that are not equal to given value.
			*/
			mglt_not?:scalar_Int;
			/**
			 * All values that are contained in given list.
			*/
			mglt_in:scalar_Int[];
			/**
			 * All values that are not contained in given list.
			*/
			mglt_not_in:scalar_Int[];
			/**
			 * All values less than the given value.
			*/
			mglt_lt?:scalar_Int;
			/**
			 * All values less than or equal the given value.
			*/
			mglt_lte?:scalar_Int;
			/**
			 * All values greater than the given value.
			*/
			mglt_gt?:scalar_Int;
			/**
			 * All values greater than or equal the given value.
			*/
			mglt_gte?:scalar_Int;
			name?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			name_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			name_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			name_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			name_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			name_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			name_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			name_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			name_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			name_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			name_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			name_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			name_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			name_not_ends_with?:scalar_String;
			passengers?:scalar_Int;
			/**
			 * All values that are not equal to given value.
			*/
			passengers_not?:scalar_Int;
			/**
			 * All values that are contained in given list.
			*/
			passengers_in:scalar_Int[];
			/**
			 * All values that are not contained in given list.
			*/
			passengers_not_in:scalar_Int[];
			/**
			 * All values less than the given value.
			*/
			passengers_lt?:scalar_Int;
			/**
			 * All values less than or equal the given value.
			*/
			passengers_lte?:scalar_Int;
			/**
			 * All values greater than the given value.
			*/
			passengers_gt?:scalar_Int;
			/**
			 * All values greater than or equal the given value.
			*/
			passengers_gte?:scalar_Int;
			updatedAt?:scalar_DateTime;
			/**
			 * All values that are not equal to given value.
			*/
			updatedAt_not?:scalar_DateTime;
			/**
			 * All values that are contained in given list.
			*/
			updatedAt_in:scalar_DateTime[];
			/**
			 * All values that are not contained in given list.
			*/
			updatedAt_not_in:scalar_DateTime[];
			/**
			 * All values less than the given value.
			*/
			updatedAt_lt?:scalar_DateTime;
			/**
			 * All values less than or equal the given value.
			*/
			updatedAt_lte?:scalar_DateTime;
			/**
			 * All values greater than the given value.
			*/
			updatedAt_gt?:scalar_DateTime;
			/**
			 * All values greater than or equal the given value.
			*/
			updatedAt_gte?:scalar_DateTime;
			films_every?:FilmFilter;
			films_some?:FilmFilter;
			films_none?:FilmFilter;
			pilots_every?:PersonFilter;
			pilots_some?:PersonFilter;
			pilots_none?:PersonFilter
		};
	export type StarshipOrderBy  = 'cargoCapacity_ASC' | 'cargoCapacity_DESC' | 'class_ASC' | 'class_DESC' | 'consumables_ASC' | 'consumables_DESC' | 'costInCredits_ASC' | 'costInCredits_DESC' | 'createdAt_ASC' | 'createdAt_DESC' | 'crew_ASC' | 'crew_DESC' | 'hyperdriveRating_ASC' | 'hyperdriveRating_DESC' | 'id_ASC' | 'id_DESC' | 'isPublished_ASC' | 'isPublished_DESC' | 'length_ASC' | 'length_DESC' | 'maxAtmospheringSpeed_ASC' | 'maxAtmospheringSpeed_DESC' | 'mglt_ASC' | 'mglt_DESC' | 'name_ASC' | 'name_DESC' | 'passengers_ASC' | 'passengers_DESC' | 'updatedAt_ASC' | 'updatedAt_DESC';
	/**
	 * A Vehicle is a single transport craft that does not have hyperdrive capability.
	*/
	export type Vehicle = {
		payload:{
			/**
			 * The maximum number of kilograms that this vehicle can transport.
			*/
			cargoCapacity?:scalar_Int;
			/**
			 *  The class of this vehicle, such as "Wheeled" or "Repulsorcraft".
			*/
			class?:scalar_String;
			/**
			 * The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply.
			*/
			consumables?:scalar_String;
			/**
			 * The cost of this vehicle new, in Galactic Credits.
			*/
			costInCredits?:scalar_Int;
			createdAt:scalar_DateTime;
			/**
			 * The number of personnel needed to run or pilot this vehicle.
			*/
			crew?:scalar_Int;
			films:{
				payload:Arrayed<query["Film"]>['payload'];
				args?:{
					filter?:FilmFilter;
					orderBy?:FilmOrderBy;
					skip?:scalar_Int;
					after?:scalar_String;
					before?:scalar_String;
					first?:scalar_Int;
					last?:scalar_Int
				};
			};
			id:scalar_ID;
			/**
			 * indicates if the record is published
			*/
			isPublished:scalar_Boolean;
			/**
			 *  The length of this vehicle in meters.
			*/
			length?:scalar_Float;
			/**
			 * The manufacturer of this vehicle.
			*/
			manufacturer:scalar_String[];
			/**
			 * The maximum speed of this vehicle in the atmosphere.
			*/
			maxAtmospheringSpeed?:scalar_Int;
			/**
			 * The model or official name of this vehicle. Such as "All-Terrain Attack Transport".
			*/
			model?:scalar_String;
			/**
			 * The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder bike".
			*/
			name:scalar_String;
			/**
			 * The number of non-essential people this vehicle can transport.
			*/
			passengers?:scalar_Int;
			pilots:{
				payload:Arrayed<query["Person"]>['payload'];
				args?:{
					filter?:PersonFilter;
					orderBy?:PersonOrderBy;
					skip?:scalar_Int;
					after?:scalar_String;
					before?:scalar_String;
					first?:scalar_Int;
					last?:scalar_Int
				};
			};
			updatedAt:scalar_DateTime;
			/**
			 * Meta information about the query.
			*/
			_filmsMeta:{
				payload:_QueryMeta['payload'];
				args?:{
					filter?:FilmFilter;
					orderBy?:FilmOrderBy;
					skip?:scalar_Int;
					after?:scalar_String;
					before?:scalar_String;
					first?:scalar_Int;
					last?:scalar_Int
				};
			};
			/**
			 * Meta information about the query.
			*/
			_pilotsMeta:{
				payload:_QueryMeta['payload'];
				args?:{
					filter?:PersonFilter;
					orderBy?:PersonOrderBy;
					skip?:scalar_Int;
					after?:scalar_String;
					before?:scalar_String;
					first?:scalar_Int;
					last?:scalar_Int
				};
			}
		};
	};
	export type VehicleFilter = {
			/**
			 * Logical AND on all given filters.
			*/
			AND:VehicleFilter[];
			/**
			 * Logical OR on all given filters.
			*/
			OR:VehicleFilter[];
			cargoCapacity?:scalar_Int;
			/**
			 * All values that are not equal to given value.
			*/
			cargoCapacity_not?:scalar_Int;
			/**
			 * All values that are contained in given list.
			*/
			cargoCapacity_in:scalar_Int[];
			/**
			 * All values that are not contained in given list.
			*/
			cargoCapacity_not_in:scalar_Int[];
			/**
			 * All values less than the given value.
			*/
			cargoCapacity_lt?:scalar_Int;
			/**
			 * All values less than or equal the given value.
			*/
			cargoCapacity_lte?:scalar_Int;
			/**
			 * All values greater than the given value.
			*/
			cargoCapacity_gt?:scalar_Int;
			/**
			 * All values greater than or equal the given value.
			*/
			cargoCapacity_gte?:scalar_Int;
			class?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			class_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			class_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			class_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			class_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			class_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			class_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			class_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			class_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			class_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			class_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			class_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			class_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			class_not_ends_with?:scalar_String;
			consumables?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			consumables_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			consumables_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			consumables_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			consumables_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			consumables_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			consumables_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			consumables_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			consumables_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			consumables_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			consumables_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			consumables_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			consumables_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			consumables_not_ends_with?:scalar_String;
			costInCredits?:scalar_Int;
			/**
			 * All values that are not equal to given value.
			*/
			costInCredits_not?:scalar_Int;
			/**
			 * All values that are contained in given list.
			*/
			costInCredits_in:scalar_Int[];
			/**
			 * All values that are not contained in given list.
			*/
			costInCredits_not_in:scalar_Int[];
			/**
			 * All values less than the given value.
			*/
			costInCredits_lt?:scalar_Int;
			/**
			 * All values less than or equal the given value.
			*/
			costInCredits_lte?:scalar_Int;
			/**
			 * All values greater than the given value.
			*/
			costInCredits_gt?:scalar_Int;
			/**
			 * All values greater than or equal the given value.
			*/
			costInCredits_gte?:scalar_Int;
			createdAt?:scalar_DateTime;
			/**
			 * All values that are not equal to given value.
			*/
			createdAt_not?:scalar_DateTime;
			/**
			 * All values that are contained in given list.
			*/
			createdAt_in:scalar_DateTime[];
			/**
			 * All values that are not contained in given list.
			*/
			createdAt_not_in:scalar_DateTime[];
			/**
			 * All values less than the given value.
			*/
			createdAt_lt?:scalar_DateTime;
			/**
			 * All values less than or equal the given value.
			*/
			createdAt_lte?:scalar_DateTime;
			/**
			 * All values greater than the given value.
			*/
			createdAt_gt?:scalar_DateTime;
			/**
			 * All values greater than or equal the given value.
			*/
			createdAt_gte?:scalar_DateTime;
			crew?:scalar_Int;
			/**
			 * All values that are not equal to given value.
			*/
			crew_not?:scalar_Int;
			/**
			 * All values that are contained in given list.
			*/
			crew_in:scalar_Int[];
			/**
			 * All values that are not contained in given list.
			*/
			crew_not_in:scalar_Int[];
			/**
			 * All values less than the given value.
			*/
			crew_lt?:scalar_Int;
			/**
			 * All values less than or equal the given value.
			*/
			crew_lte?:scalar_Int;
			/**
			 * All values greater than the given value.
			*/
			crew_gt?:scalar_Int;
			/**
			 * All values greater than or equal the given value.
			*/
			crew_gte?:scalar_Int;
			id?:scalar_ID;
			/**
			 * All values that are not equal to given value.
			*/
			id_not?:scalar_ID;
			/**
			 * All values that are contained in given list.
			*/
			id_in:scalar_ID[];
			/**
			 * All values that are not contained in given list.
			*/
			id_not_in:scalar_ID[];
			/**
			 * All values less than the given value.
			*/
			id_lt?:scalar_ID;
			/**
			 * All values less than or equal the given value.
			*/
			id_lte?:scalar_ID;
			/**
			 * All values greater than the given value.
			*/
			id_gt?:scalar_ID;
			/**
			 * All values greater than or equal the given value.
			*/
			id_gte?:scalar_ID;
			/**
			 * All values containing the given string.
			*/
			id_contains?:scalar_ID;
			/**
			 * All values not containing the given string.
			*/
			id_not_contains?:scalar_ID;
			/**
			 * All values starting with the given string.
			*/
			id_starts_with?:scalar_ID;
			/**
			 * All values not starting with the given string.
			*/
			id_not_starts_with?:scalar_ID;
			/**
			 * All values ending with the given string.
			*/
			id_ends_with?:scalar_ID;
			/**
			 * All values not ending with the given string.
			*/
			id_not_ends_with?:scalar_ID;
			isPublished?:scalar_Boolean;
			/**
			 * All values that are not equal to given value.
			*/
			isPublished_not?:scalar_Boolean;
			length?:scalar_Float;
			/**
			 * All values that are not equal to given value.
			*/
			length_not?:scalar_Float;
			/**
			 * All values that are contained in given list.
			*/
			length_in:scalar_Float[];
			/**
			 * All values that are not contained in given list.
			*/
			length_not_in:scalar_Float[];
			/**
			 * All values less than the given value.
			*/
			length_lt?:scalar_Float;
			/**
			 * All values less than or equal the given value.
			*/
			length_lte?:scalar_Float;
			/**
			 * All values greater than the given value.
			*/
			length_gt?:scalar_Float;
			/**
			 * All values greater than or equal the given value.
			*/
			length_gte?:scalar_Float;
			maxAtmospheringSpeed?:scalar_Int;
			/**
			 * All values that are not equal to given value.
			*/
			maxAtmospheringSpeed_not?:scalar_Int;
			/**
			 * All values that are contained in given list.
			*/
			maxAtmospheringSpeed_in:scalar_Int[];
			/**
			 * All values that are not contained in given list.
			*/
			maxAtmospheringSpeed_not_in:scalar_Int[];
			/**
			 * All values less than the given value.
			*/
			maxAtmospheringSpeed_lt?:scalar_Int;
			/**
			 * All values less than or equal the given value.
			*/
			maxAtmospheringSpeed_lte?:scalar_Int;
			/**
			 * All values greater than the given value.
			*/
			maxAtmospheringSpeed_gt?:scalar_Int;
			/**
			 * All values greater than or equal the given value.
			*/
			maxAtmospheringSpeed_gte?:scalar_Int;
			model?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			model_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			model_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			model_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			model_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			model_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			model_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			model_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			model_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			model_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			model_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			model_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			model_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			model_not_ends_with?:scalar_String;
			name?:scalar_String;
			/**
			 * All values that are not equal to given value.
			*/
			name_not?:scalar_String;
			/**
			 * All values that are contained in given list.
			*/
			name_in:scalar_String[];
			/**
			 * All values that are not contained in given list.
			*/
			name_not_in:scalar_String[];
			/**
			 * All values less than the given value.
			*/
			name_lt?:scalar_String;
			/**
			 * All values less than or equal the given value.
			*/
			name_lte?:scalar_String;
			/**
			 * All values greater than the given value.
			*/
			name_gt?:scalar_String;
			/**
			 * All values greater than or equal the given value.
			*/
			name_gte?:scalar_String;
			/**
			 * All values containing the given string.
			*/
			name_contains?:scalar_String;
			/**
			 * All values not containing the given string.
			*/
			name_not_contains?:scalar_String;
			/**
			 * All values starting with the given string.
			*/
			name_starts_with?:scalar_String;
			/**
			 * All values not starting with the given string.
			*/
			name_not_starts_with?:scalar_String;
			/**
			 * All values ending with the given string.
			*/
			name_ends_with?:scalar_String;
			/**
			 * All values not ending with the given string.
			*/
			name_not_ends_with?:scalar_String;
			passengers?:scalar_Int;
			/**
			 * All values that are not equal to given value.
			*/
			passengers_not?:scalar_Int;
			/**
			 * All values that are contained in given list.
			*/
			passengers_in:scalar_Int[];
			/**
			 * All values that are not contained in given list.
			*/
			passengers_not_in:scalar_Int[];
			/**
			 * All values less than the given value.
			*/
			passengers_lt?:scalar_Int;
			/**
			 * All values less than or equal the given value.
			*/
			passengers_lte?:scalar_Int;
			/**
			 * All values greater than the given value.
			*/
			passengers_gt?:scalar_Int;
			/**
			 * All values greater than or equal the given value.
			*/
			passengers_gte?:scalar_Int;
			updatedAt?:scalar_DateTime;
			/**
			 * All values that are not equal to given value.
			*/
			updatedAt_not?:scalar_DateTime;
			/**
			 * All values that are contained in given list.
			*/
			updatedAt_in:scalar_DateTime[];
			/**
			 * All values that are not contained in given list.
			*/
			updatedAt_not_in:scalar_DateTime[];
			/**
			 * All values less than the given value.
			*/
			updatedAt_lt?:scalar_DateTime;
			/**
			 * All values less than or equal the given value.
			*/
			updatedAt_lte?:scalar_DateTime;
			/**
			 * All values greater than the given value.
			*/
			updatedAt_gt?:scalar_DateTime;
			/**
			 * All values greater than or equal the given value.
			*/
			updatedAt_gte?:scalar_DateTime;
			films_every?:FilmFilter;
			films_some?:FilmFilter;
			films_none?:FilmFilter;
			pilots_every?:PersonFilter;
			pilots_some?:PersonFilter;
			pilots_none?:PersonFilter
		};
	export type VehicleOrderBy  = 'cargoCapacity_ASC' | 'cargoCapacity_DESC' | 'class_ASC' | 'class_DESC' | 'consumables_ASC' | 'consumables_DESC' | 'costInCredits_ASC' | 'costInCredits_DESC' | 'createdAt_ASC' | 'createdAt_DESC' | 'crew_ASC' | 'crew_DESC' | 'id_ASC' | 'id_DESC' | 'isPublished_ASC' | 'isPublished_DESC' | 'length_ASC' | 'length_DESC' | 'maxAtmospheringSpeed_ASC' | 'maxAtmospheringSpeed_DESC' | 'model_ASC' | 'model_DESC' | 'name_ASC' | 'name_DESC' | 'passengers_ASC' | 'passengers_DESC' | 'updatedAt_ASC' | 'updatedAt_DESC';
	/**
	 * Meta information about the query.
	*/
	export type _QueryMeta = {
		payload:{
			count:scalar_Int
		};
	};
	/**
	 * A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.

In some cases, you need to provide options to alter GraphQL’s execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.
	*/
	export type __Directive = {
		payload:{
			name:scalar_String;
			description?:scalar_String;
			locations:__DirectiveLocation[];
			args:Arrayed<__InputValue>
		};
	};
	/**
	 * A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.
	*/
	export type __DirectiveLocation  = 'QUERY' | 'MUTATION' | 'SUBSCRIPTION' | 'FIELD' | 'FRAGMENT_DEFINITION' | 'FRAGMENT_SPREAD' | 'INLINE_FRAGMENT' | 'SCHEMA' | 'SCALAR' | 'OBJECT' | 'FIELD_DEFINITION' | 'ARGUMENT_DEFINITION' | 'INTERFACE' | 'UNION' | 'ENUM' | 'ENUM_VALUE' | 'INPUT_OBJECT' | 'INPUT_FIELD_DEFINITION';
	/**
	 * One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.
	*/
	export type __EnumValue = {
		payload:{
			name:scalar_String;
			description?:scalar_String;
			isDeprecated:scalar_Boolean;
			deprecationReason?:scalar_String
		};
	};
	/**
	 * Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.
	*/
	export type __Field = {
		payload:{
			name:scalar_String;
			description?:scalar_String;
			args:Arrayed<__InputValue>;
			type:__Type;
			isDeprecated:scalar_Boolean;
			deprecationReason?:scalar_String
		};
	};
	/**
	 * Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.
	*/
	export type __InputValue = {
		payload:{
			name:scalar_String;
			description?:scalar_String;
			type:__Type;
			/**
			 * A GraphQL-formatted string representing the default value for this input value.
			*/
			defaultValue?:scalar_String
		};
	};
	/**
	 * A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.
	*/
	export type __Schema = {
		payload:{
			/**
			 * A list of all types supported by this server.
			*/
			types:Arrayed<__Type>;
			/**
			 * The type that query operations will be rooted at.
			*/
			queryType:__Type;
			/**
			 * If this server supports mutation, the type that mutation operations will be rooted at.
			*/
			mutationType?:__Type;
			/**
			 * If this server support subscription, the type that subscription operations will be rooted at.
			*/
			subscriptionType?:__Type;
			/**
			 * A list of all directives supported by this server.
			*/
			directives:Arrayed<__Directive>
		};
	};
	/**
	 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.

Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name and description, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
	*/
	export type __Type = {
		payload:{
			kind:__TypeKind;
			name?:scalar_String;
			description?:scalar_String;
			fields:{
				payload:Arrayed<__Field>['payload'];
				args?:{
					includeDeprecated?:scalar_Boolean
				};
			};
			interfaces:Arrayed<__Type>;
			possibleTypes:Arrayed<__Type>;
			enumValues:{
				payload:Arrayed<__EnumValue>['payload'];
				args?:{
					includeDeprecated?:scalar_Boolean
				};
			};
			inputFields:Arrayed<__InputValue>;
			ofType?:__Type
		};
	};
	/**
	 * An enum describing what kind of type a given `__Type` is.
	*/
	export type __TypeKind  = 'SCALAR' | 'OBJECT' | 'INTERFACE' | 'UNION' | 'ENUM' | 'INPUT_OBJECT' | 'LIST' | 'NON_NULL';
	/**
	 * The `Boolean` scalar type represents `true` or `false`.
	*/
	export type scalar_Boolean = boolean;
	/**
	 * The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point).
	*/
	export type scalar_Float = number;
	/**
	 * The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
	*/
	export type scalar_ID = string;
	/**
	 * The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
	*/
	export type scalar_Int = number;
	/**
	 * The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
	*/
	export type scalar_String = string;
	/**
	 * END OF types DEFINITIONS
	*/


	/**
	 * END OF swapi
	*/



}/**
 * Main entry point for GraphiosTs. All queries, mutations and subscriptions are represented here.
*/
export default interface swapiGts{

	query:swapi.query;
	mutation:swapi.mutation;
	subscription:swapi.subscription;
}

