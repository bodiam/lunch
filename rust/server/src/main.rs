#[macro_use] extern crate nickel;
extern crate rustc_serialize;

use nickel::{
        Nickel, JsonBody, HttpRouter
};
use rustc_serialize::json::{ToJson};

mod reservation;
use reservation::Reservation;

fn main() {
    let mut server = Nickel::new();

    server.get("/", middleware!{
        "Hello!"
    });

    server.get("/reservations/:id", middleware!{
        Reservation::new("Bodo", "i@bodokaiser.io").to_json()
    });

    // curl 'http://127.0.0.1:3000/reservations/' -H 'Content-Type: application/json;charset=UTF-8' --data-binary $'{ "email": "a@a.nl","name": "Connor" }'
   server.post("/reservations/", middleware! { |request, response|
        let reservation = request.json_as::<Reservation>().unwrap();
        format!("Hello {} {}", reservation.name, reservation.email)
    });

    server.listen("127.0.0.1:3000");
}
