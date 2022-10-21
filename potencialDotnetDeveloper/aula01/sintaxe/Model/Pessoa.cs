
namespace sintaxe.Model
{
    public class Pessoa
    {
        public string? Nome {get; set;}
        public int Idade {get; set;}
        public void Apresentar()
        {
            Console.WriteLine($"Ola, Meu nome é {Nome}. Tenho {Idade}");

        }
    }
}



//MEU DICIONÁRO

/*
namespace sintaxe.Model
    -"O nome do meu escopo de classes."
    -"Chamo usando o using".
*/

/*
public string Nome {get; set;}
Nome = "Pedro"
    get; > estou pegando o valor (Nome)
    set; > estou atribuindo o valor "Pedro" para Nome
*/

/*
warning CS8618: public string Nome {get; set;}

Resolvido assim:
public string? Nome {get; set;}
    ou
public string? Nome {get; set;} = "";

"O tipo string tem que ter seu valor string, mas a propriedade get e set, são do tipo nulo..."

*/