import Igeo from "./geo.interface";

/**
 * Interface de dados de endereço contendo
 * street, suite, city, zipcode e geo
 * @author Israel <so.israelweb@gmail.com> 
 */
export default interface Iaddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Igeo;
}