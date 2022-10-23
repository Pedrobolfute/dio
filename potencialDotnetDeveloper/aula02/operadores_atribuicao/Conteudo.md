# Operador de atribuição

## =
    - Atribuição;
    - Conbinação (Pega a variável e já implementa a operação);
      - +=
      - -=
      - /=
      - *=
        - Esse modo de implementação é mais eficiente.
# Converter variáveis;

    - Cast = converter o tipo de variáveis;

    -   int.Parse("stringNumber");
    -   float.Parse("stringNumber");
    -   double.Parse("stringNumber");
    -   decimal.Parse("stringNumber");

    -   Convert.ToInt16(stringNumber);
    -   Convert.ToInt32(stringNumber);
    -   Convert.ToInt64(stringNumber);
    -   Convert.ToDecimal(stringNumber);
    -   Convert.ToChar(...);
    -   Convert.ToByte(...);
    -   Convert.ToBoolean(...);
    -   Convert.ToDataTime(...);
    -   ...
-   Parse
    > Não trata valores nulo;
-   Convert.ToType
    >Trata null como 0;
-   Conversão implicita
    > double e int; long e int; (um contém no outro na herarquia, logo, não preciso converter);