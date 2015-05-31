package main

type Restaurant struct {
	Id        	int       `json:"id"`
	Name      	string    `json:"name"`
	Description string    `json:"description"`
	Location    string    `json:"location"`
	Address     string    `json:"address"`
	Type        string    `json:"type"`
	Cuisine     string    `json:"cuisine"`
	Thumbnail   string    `json:"thumbnail"`
	Carousel    []string  `json:"carousel"`
	Rating      float32   `json:"rating"`
}

type Restaurants []Restaurant
