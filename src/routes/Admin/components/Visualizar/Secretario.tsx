
import { Divider, Flex, Text, Box } from "@chakra-ui/react";
import Button from "../../../../components/Button";
import { Input} from "@nextui-org/react";
import { useRouter } from 'next/router';
export default function Visualizar({
    mobile,
    nome,
    email,
    cpf,
    telefone,
    turno,
    setMobile,
}:{
    mobile:boolean;
    nome:string;
    email:string;
    cpf:string;
    telefone:string;
    turno:string;
    setMobile: false;
}){
    const router = useRouter();

    const navegarParaOutraPasta = () => {
      router.push('/');
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