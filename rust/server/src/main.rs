#[macro_use] extern crate nickel;
extern crate rustc_serialize;

use std::collections::BTreeMap;
use std::io::Write;
use nickel::{
        Nickel, NickelError, 
            JsonBody, HttpRouter
};
use rustc_serialize::json::{ToJson};

mod reservation;
use reservation::Reservation;

fn main() {
    let mut server = Nickel::new();

    let mut router = Nickel::router();

    server.get("/", middleware!{
        "Hello!"
    });

    server.get("/reservations/:id", middleware!{
        Reservation::new("Bodo", "i@bodokaiser.io").to_json()
    });

   router.post("/a/post/request", middleware! { |request, response|
        let person = request.json_as::<Reservation>().unwrap();
        format!("Hello {} {}", person.name, person.email)
    });

    server.listen("127.0.0.1:3000");
}
