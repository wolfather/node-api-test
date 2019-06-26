import Iaddress from './address.interface';
import Icompany from "./company.interface";

/**
 * Interface de dados de pessoas
 * @author Israel <so.israelweb@gmail.com>
 * @version 1.0.0
 */
export default interface Iperson extends Icompany{
  /**
   * id de pessoa
   */
  id: number;
  /**
   * Nome da pessoa
   */
  name: string;
  /**
   * alias da pessoa
   */
  username: string;
  /**
   * email da pessoa
   */
  email: string;
  /**
   * dados de endereço com Iaddress
   */
  address: Iaddress;
  /**
   * numero de telefone da pessoa
   */
  phone: string;
  /**
   * endereço de website da pessoa
   */
  website: string;
  /**
   * nome da companhia que a pessoa trabalha
   */
  company: Icompany;
}

export interface Ipersondatadetail {
  name: string;
  website: string;
  email: string;
  company: Icompany;
  address?: Iaddress;
}