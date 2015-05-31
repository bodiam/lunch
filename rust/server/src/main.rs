#[macro_use] extern crate nickel;
extern crate rustc_serialize as serialize;

use nickel::Nickel;
use nickel::HttpRouter;

use serialize::json::ToJson;

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

    server.listen("127.0.0.1:3000");
}
