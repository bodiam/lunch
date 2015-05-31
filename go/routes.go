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
		"TodoIndex",
		"GET",
		"/restaurants",
		TodoIndex,
	},
	Route{
		"TodoCreate",
		"POST",
		"/restaurants",
		TodoCreate,
	},
	Route{
		"TodoShow",
		"GET",
		"/restaurants/{todoId}",
		TodoShow,
	},
}
