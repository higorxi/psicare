
import { Divider, Flex, Text, Box } from "@chakra-ui/react";
import Button from "../../../../components/Button";
import { Input, useInput, Grid   } from "@nextui-org/react";
import { useRouter } from 'next/router';

export default function Visualizar({
    mobile,
    nome,
    email,
    cpf,
    telefone,
    turno,
}:{
    mobile:boolean;
    nome:string;
    email:string;
    cpf:string;
    telefone:string;
    turno:string;
}){
    const router = useRouter();

    const navegarParaOutraPasta = () => {
      router.push('/pages');
    };
    return (
      <>
        <Flex flexDir="column" p="8" pt="6" >
          <Flex  w="100%" flexDir='row' justify='space-between' align='end'>
            <Text color="#787878" fontSize="1.8rem" flexDir='column'>
              Informações sobre secretário
            </Text>
            <Button label="Editar" onPress={navegarParaOutraPasta}  filled />
          </Flex>
          </Flex>
          <Divider mt="4" />
          <Flex
            flexDir="column"
            py="4"
            w="50%"
          >
            /* 1 - Replicar esse componente 'text' para todos os outros inputs
               2 - Fazer aluno, secretário e professor
               3 - Transformar em uma página total, aproveitando o componente de barra lateral
               4 - Linkar todas as rotas
            */
            <Text fontSize='1rem' color="#787878">
            Nome
            </Text> 
            <Text fontSize='1.6rem' color="#787878">
            {nome}
            </Text>
            
            {mobile ? (
              <Flex
                w="100%"
                flexDir="column"
                justify="space-between"
              >
                <Input
                  label="CPF"
                  placeholder={cpf}
                  disabled
                />
                <Flex w={10} />
                <Input
                  label="Telefone"
                  placeholder={telefone}
                  disabled
                />
              </Flex>
            ) : (
              <Flex w="100%"  justify="space-between">
                <Input
                  disabled
                  label="CPF"
                  placeholder={cpf}
                />
                <Flex w={10} />
                <Input
                  label="Telefone"
                  placeholder={telefone}
                  disabled
                />
              </Flex>
            )}
            <Input
              label="E-mail"
              placeholder={email}
              disabled
            />
            <Input
              label="Turno"
              placeholder={turno}
              disabled
            />
        </Flex>
        <Button
        onPress={navegarParaOutraPasta}
        label="Voltar"
        />
        </>
      );
}