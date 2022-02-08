import React, { useState } from 'react'
import TextField from 'src/components/forms/TextField'
import { Button, Card, Title, Text } from '@gnosis.pm/safe-react-components'
import styled from 'styled-components'
import Page from 'src/components/layout/Page'
import Block from 'src/components/layout/Block'
import Link from 'src/components/layout/Link'
import LinkWithRef from 'src/components/layout/Link'
import { CREATE_CUSTOMER_CONFIRMATION } from 'src/routes/routes'
const CreateSafePageCustomer = () => {
  const [safeName, setSafeName] = useState('')
  const [walletAddress, setWalletAddress] = useState('')
  return (
    <Page>
      <Block>
        <CardsContainer>
          <StyledCard>
            {/* Create Safe */}
            <CardContentContainer>
              <CardDescriptionContainer>
                <div>
                  <label>Safe name</label>
                  <div>
                    <TextField
                      input={{
                        name: 'key',
                        onChange: () => {
                          setSafeName('abcd')
                        },
                        placeholder: 'Please enter safe name',
                        value: safeName.toString(),
                        type: 'text',
                      }}
                      meta={{ valid: true }}
                      testId={'key'}
                      text={safeName}
                      multiline={false}
                    />
                  </div>

                  <label>Your wallet address</label>
                  <div>
                    <TextField
                      input={{
                        name: 'key',
                        placeholder: 'Please enter wallet address',
                        value: walletAddress.toString(),
                        type: 'text',
                      }}
                      meta={{ valid: true }}
                      testId={'key'}
                      text={walletAddress}
                      multiline={false}
                    />
                  </div>
                  <div>
                    <LinkWithRef
                      aria-label="Hide details of the transaction"
                      //onClick={() => setShowTxData(false)}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      +Add another wallet address
                    </LinkWithRef>
                  </div>
                </div>
              </CardDescriptionContainer>
              <StyledButton
                size="lg"
                color="primary"
                variant="contained"
                component={Link}
                to={CREATE_CUSTOMER_CONFIRMATION}
              >
                <Text size="xl" color="white">
                  Create Safe
                </Text>
              </StyledButton>
            </CardContentContainer>
          </StyledCard>
        </CardsContainer>
      </Block>
    </Page>
  )
}

export default CreateSafePageCustomer

const CardsContainer = styled.div`
  display: flex;
  height: 300px;
  max-width: 850px;
`

const StyledCard = styled(Card)`
  display: flex;
  flex: 0 1 100%;
  padding: 0;
`

const CardContentContainer = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  padding: 24px;
  align-items: flex-start;
`

const StyledButton = styled(Button)`
  background-color: #ca0808 !important;
  border-radius: 0px !important;
  min-width: 20px;
`

const CardDescriptionContainer = styled.div`
  margin-top: 16px;
  margin-bottom: auto;
`
