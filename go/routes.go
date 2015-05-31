package main

import "net/http"

type Route struct {
	Name        string
	Method      string
	Pattern     string
	HandlerFunc http.HandlerFunc
}

type Routes []Route

var routes = Routes{
	Route{
		"Index",
		"GET",
		"/",
		Index,
	},
	Route{
		"RestaurantIndex",
		"GET",
		"/restaurants",
		RestaurantIndex,
	},
	Route{
		"RestaurantCreate",
		"POST",
		"/restaurants",
		RestaurantCreate,
	},
	Route{
		"RestaurantShow",
		"GET",
		"/restaurants/{todoId}",
		RestaurantShow,
	},
}
