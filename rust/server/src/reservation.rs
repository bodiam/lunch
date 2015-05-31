use std::collections::BTreeMap;

use serialize::json::Json;
use serialize::json::ToJson;

pub struct Reservation {
    name: String,
    email: String,
}

impl Reservation {
    pub fn new(name: &str, email: &str) -> Reservation {
        Reservation{
            name: name.to_string(),
            email: email.to_string(),
        }
    }
}

impl ToJson for Reservation {
    fn to_json(&self) -> Json {
        let mut map = BTreeMap::new();

        map.insert("name".to_string(), self.name.to_json());
        map.insert("email".to_string(), self.email.to_json());

        Json::Object(map)
    }
}
