package main

import "fmt"

var currentId int

var restaurants Restaurants

// Give us some seed data
func init() {

	RepoCreateRestaurant(Restaurant{Name: "Grandcafe Lokaal",
	    Description: "Beleef Amsterdam in het donker!<br><br>Lokaal is de nieuwste indoor attractie van Amsterdam. " +
	    "Hier zijn alle kenmerken die Amsterdam zo uniek maken nagebouwd. Bij Lokaal wandel je bijvoorbeeld door het " +
	    "Vondelpark en voel je het gras onder je voeten. Fiets over de Amsterdamse grachten en hoor het drukke verkeer. " +
	    "Loop langs het Red-Light district en ruik de verse vis op de Albert Cuyp markt.<br /><br /> In het donkder sta je " +
	    "er natuurlijk noot alleen voor. Met begeleiding van blinde stadsgidsen ben je in goede handen tijds ",
	    Location: "Amsterdam",
	    Address: "Wibautstraat 85",
	    Type: "Bbq/grill, Internationaal",
	    Cuisine: "French",
	    Thumbnail: "http://couverts.nl/media/foto/280x280/3088/781da1b0-6948-4a1b-b792-c4dec370f34f.jpg",
	    Carousel: []string{
	        "http://www.couverts.nl/media/foto/550x310/3088/cbed57f1-330b-43f3-b1f8-9ae2b65586b9.jpg",
	        "http://www.couverts.nl/media/foto/550x310/3088/781da1b0-6948-4a1b-b792-c4dec370f34f.jpg",
	        "http://www.couverts.nl/media/foto/550x310/3088/50e2b29a-25bf-4789-9d0f-e7198acb4073.jpg",
	        "http://www.couverts.nl/media/foto/550x310/3088/94c9d1a5-cbbd-4993-b519-b02ac2cc3c7c.jpg",
	        "http://www.couverts.nl/media/foto/550x310/3088/ac913f2b-edd4-454b-8458-f750bd35c3b8.jpg",
	        "http://www.couverts.nl/media/foto/550x310/3088/13468cb4-b276-4f32-ad31-a337d1a9e915.jpg",
	    },
	    Rating: 6.8})
	RepoCreateRestaurant(Restaurant{Name: "CtheCity",
	    Description: "Beleef Amsterdam in het donker!<br><br>CtheCity is de nieuwste indoor attractie van Amsterdam. " +
	    "Hier zijn alle kenmerken die Amsterdam zo uniek maken nagebouwd. Bij CtheCity wandel je bijvoorbeeld door het " +
	    "Vondelpark en voel je het gras onder je voeten. Fiets over de Amsterdamse grachten en hoor het drukke verkeer. " +
	    "Loop langs het Red-Light district en ruik de verse vis op de Albert Cuyp markt.<br /><br /> In het donkder sta je " +
	    "er natuurlijk noot alleen voor. Met begeleiding van blinde stadsgidsen ben je in goede handen tijds ",
	    Location: "Amsterdam",
	    Address: "Amsteldijk 55",
	    Type: "Hollands",
	    Thumbnail: "http://couverts.nl/media/foto/280x280/1988/030be71e-734c-49c5-a794-adc7ef7c3156.jpg",
	    Rating: 7.5})
}

func RepoFindRestaurant(id int) Restaurant {
	for _, t := range restaurants {
		if t.Id == id {
			return t
		}
	}
	// return empty Restaurant if not found
	return Restaurant{}
}

//this is bad, I don't think it passes race condtions
func RepoCreateRestaurant(t Restaurant) Restaurant {
	currentId += 1
	t.Id = currentId
	restaurants = append(restaurants, t)
	return t
}

func RepoDestroyRestaurant(id int) error {
	for i, t := range restaurants {
		if t.Id == id {
			restaurants = append(restaurants[:i], restaurants[i+1:]...)
			return nil
		}
	}
	return fmt.Errorf("Could not find Restaurant with id of %d to delete", id)
}
