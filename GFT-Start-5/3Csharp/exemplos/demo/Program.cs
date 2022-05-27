// Conceituando coisas aqui, com o objetivo de meus estudos:
/*Objetivo aqui é mostrar os ValueTypes, as referências de valor*/
using System;
using static System.Console;        // Assim não presiso de ficar usando o Console.WriteLine

namespace demo  
{

    /* Uma classe pública que mostra  */
    public class Program
    {   
        static void Adicionar20(int a)                     /*   Isso é um Método (ele é um membro que fica contído no namespace. e na class.?.), e ajuda na class.
                                                                "Ele não presisa ser puplico porque está na mesma classe"
                                                            */
        {
            a = a + 20;     //no debug a variável "a" só vai ter o 20 somente *dentro desse método*
        }



        public static void Main(string[] args)
        {
            int a = 2;
            Adicionar20(a); //Na chamada dessa ?função? aqui, mando adicionar 20 a minha variável "a" com o "intuito de printar 20 + 2= '22' no final".
                            //Mas a ***a principal característica de um ValueType é que o valor de uma var é atribuido para outra var, ele é somente "copiado" e não é passado o valor.
                            // e essa cópia só existe dentro da outra var da ?função? acima.***

            WriteLine($"O valor da variável é {a}");
        }
    }
}
