package main

import "fmt"

var currentId int

var restaurants Restaurants

// Give us some seed data
func init() {
	RepoCreateTodo(Restaurant{Name: "Write presentation"})
	RepoCreateTodo(Restaurant{Name: "Host meetup"})
}

func RepoFindTodo(id int) Restaurant {
	for _, t := range restaurants {
		if t.Id == id {
			return t
		}
	}
	// return empty Restaurant if not found
	return Restaurant{}
}

//this is bad, I don't think it passes race condtions
func RepoCreateTodo(t Restaurant) Restaurant {
	currentId += 1
	t.Id = currentId
	restaurants = append(restaurants, t)
	return t
}

func RepoDestroyTodo(id int) error {
	for i, t := range restaurants {
		if t.Id == id {
			restaurants = append(restaurants[:i], restaurants[i+1:]...)
			return nil
		}
	}
	return fmt.Errorf("Could not find Restaurant with id of %d to delete", id)
}
